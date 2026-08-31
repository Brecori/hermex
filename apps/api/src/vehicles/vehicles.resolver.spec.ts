import { GraphQLError } from "graphql";
import { VehiclesResolver } from "./vehicles.resolver";

describe("VehiclesResolver", () => {
  function createResolver() {
    const prisma = {
      vehicle: {
        findMany: jest.fn().mockResolvedValue([{ id: "vehicle-1", available: true }]),
        count: jest.fn().mockResolvedValue(1),
      },
    };

    return {
      prisma,
      resolver: new VehiclesResolver(prisma as never),
    };
  }

  it("returns the first 9 available vehicles by default", async () => {
    const { prisma, resolver } = createResolver();

    await expect(resolver.vehicles()).resolves.toEqual({
      items: [{ id: "vehicle-1", available: true }],
      totalCount: 1,
    });
    expect(prisma.vehicle.findMany).toHaveBeenCalledWith({
      where: { available: true },
      include: { category: true },
      skip: 0,
      take: 9,
    });
    expect(prisma.vehicle.count).toHaveBeenCalledWith({
      where: { available: true },
    });
  });

  it("filters available vehicles by category", async () => {
    const { prisma, resolver } = createResolver();

    await resolver.vehicles("category-1");

    expect(prisma.vehicle.findMany).toHaveBeenCalledWith({
      where: { available: true, categoryId: "category-1" },
      include: { category: true },
      skip: 0,
      take: 9,
    });
    expect(prisma.vehicle.count).toHaveBeenCalledWith({
      where: { available: true, categoryId: "category-1" },
    });
  });

  it("applies pagination and clamps take to 27", async () => {
    const { prisma, resolver } = createResolver();

    await resolver.vehicles(undefined, 9, 100);

    expect(prisma.vehicle.findMany).toHaveBeenCalledWith({
      where: { available: true },
      include: { category: true },
      skip: 9,
      take: 27,
    });
  });

  it("searches available vehicles with category and pagination", async () => {
    const { prisma, resolver } = createResolver();

    await resolver.searchVehicles(
      {
        pickupLocationId: "location-1",
        returnLocationId: "location-2",
        pickupDate: "2026-09-01T10:00:00.000Z",
        returnDate: "2026-09-05T10:00:00.000Z",
        categoryId: "category-1",
      },
      3,
      6,
    );

    expect(prisma.vehicle.findMany).toHaveBeenCalledWith({
      where: { available: true, categoryId: "category-1" },
      include: { category: true },
      skip: 3,
      take: 6,
    });
  });

  it("rejects search when returnDate is not later than pickupDate", async () => {
    const { resolver } = createResolver();

    expect(() =>
      resolver.searchVehicles({
        pickupLocationId: "location-1",
        returnLocationId: "location-2",
        pickupDate: "2026-09-05T10:00:00.000Z",
        returnDate: "2026-09-01T10:00:00.000Z",
      }),
    ).toThrow(GraphQLError);
  });
});
