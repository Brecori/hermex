import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../dist/generated/prisma/client.js";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is required to seed the database.");
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
});

const categories = ["Hatch", "Sedan", "SUV", "Minivan", "Picape"];

const locations = [
  {
    name: "Belo Horizonte Centro",
    address: "Av. Afonso Pena, 1000",
    city: "Belo Horizonte",
    state: "MG",
  },
  {
    name: "Rio de Janeiro Santos Dumont",
    address: "Praca Senador Salgado Filho, s/n",
    city: "Rio de Janeiro",
    state: "RJ",
  },
  {
    name: "Sao Paulo Congonhas",
    address: "Av. Washington Luis, s/n",
    city: "Sao Paulo",
    state: "SP",
  },
];

try {
  for (const name of categories) {
    await prisma.category.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  for (const location of locations) {
    await prisma.location.upsert({
      where: { name: location.name },
      update: {
        address: location.address,
        city: location.city,
        state: location.state,
      },
      create: location,
    });
  }
} catch (error) {
  console.error(error);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
