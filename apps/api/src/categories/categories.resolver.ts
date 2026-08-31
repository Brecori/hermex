import { Query, Resolver } from "@nestjs/graphql";
import { PrismaService } from "../prisma/prisma.service";
import { Category } from "./category.model";

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => [Category])
  categories() {
    return this.prisma.category.findMany({
      orderBy: { name: "asc" },
    });
  }
}
