import { LocationsResolver } from "./locations.resolver";

describe("LocationsResolver", () => {
  it("returns locations ordered by name", async () => {
    const prisma = {
      location: {
        findMany: jest.fn().mockResolvedValue([{ id: "location-1", name: "Sao Paulo Congonhas" }]),
      },
    };
    const resolver = new LocationsResolver(prisma as never);

    await expect(resolver.locations()).resolves.toEqual([
      { id: "location-1", name: "Sao Paulo Congonhas" },
    ]);
    expect(prisma.location.findMany).toHaveBeenCalledWith({
      orderBy: { name: "asc" },
    });
  });
});
