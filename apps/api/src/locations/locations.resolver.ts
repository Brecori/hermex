import { Query, Resolver } from "@nestjs/graphql";
import { PrismaService } from "../prisma/prisma.service";
import { Location } from "./location.model";

@Resolver(() => Location)
export class LocationsResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => [Location])
  locations() {
    return this.prisma.location.findMany({
      orderBy: { name: "asc" },
    });
  }
}
