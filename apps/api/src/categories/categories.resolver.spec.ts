import { CategoriesResolver } from "./categories.resolver";

describe("CategoriesResolver", () => {
  it("returns categories ordered by name", async () => {
    const prisma = {
      category: {
        findMany: jest.fn().mockResolvedValue([{ id: "category-1", name: "Hatch" }]),
      },
    };
    const resolver = new CategoriesResolver(prisma as never);

    await expect(resolver.categories()).resolves.toEqual([{ id: "category-1", name: "Hatch" }]);
    expect(prisma.category.findMany).toHaveBeenCalledWith({
      orderBy: { name: "asc" },
    });
  });
});
