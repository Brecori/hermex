import { Args, ID, Int, Query, Resolver } from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { PrismaService } from "../prisma/prisma.service";
import { SearchVehiclesInput } from "./search-vehicles.input";
import { VehiclePage } from "./vehicle-page.model";
import { Vehicle } from "./vehicle.model";

const DEFAULT_TAKE = 9;
const MAX_TAKE = 27;

@Resolver(() => Vehicle)
export class VehiclesResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => VehiclePage)
  vehicles(
    @Args("categoryId", { type: () => ID, nullable: true }) categoryId?: string,
    @Args("skip", { type: () => Int, nullable: true }) skip = 0,
    @Args("take", { type: () => Int, nullable: true }) take = DEFAULT_TAKE,
  ) {
    return this.findAvailableVehicles({ categoryId, skip, take });
  }

  @Query(() => VehiclePage)
  searchVehicles(
    @Args("input") input: SearchVehiclesInput,
    @Args("skip", { type: () => Int, nullable: true }) skip = 0,
    @Args("take", { type: () => Int, nullable: true }) take = DEFAULT_TAKE,
  ) {
    const pickupDate = new Date(input.pickupDate);
    const returnDate = new Date(input.returnDate);

    if (Number.isNaN(pickupDate.getTime()) || Number.isNaN(returnDate.getTime())) {
      throw new GraphQLError("pickupDate and returnDate must be valid ISO date strings.");
    }

    if (returnDate <= pickupDate) {
      throw new GraphQLError("returnDate must be later than pickupDate.");
    }

    // Location/date are accepted by the API contract; real availability filtering depends on future Reservation and Vehicle-Location models.
    void input.pickupLocationId;
    void input.returnLocationId;
    void pickupDate;
    void returnDate;

    return this.findAvailableVehicles({ categoryId: input.categoryId, skip, take });
  }

  private findAvailableVehicles({
    categoryId,
    skip,
    take,
  }: {
    categoryId?: string;
    skip: number;
    take: number;
  }) {
    const where = {
      available: true,
      ...(categoryId ? { categoryId } : {}),
    };
    const clampedTake = Math.min(take, MAX_TAKE);

    return Promise.all([
      this.prisma.vehicle.findMany({
        where,
        include: { category: true },
        skip,
        take: clampedTake,
      }),
      this.prisma.vehicle.count({ where }),
    ]).then(([items, totalCount]) => ({ items, totalCount }));
  }
}
