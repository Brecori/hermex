import type { Config } from "jest";

const config: Config = {
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: ".",
  testRegex: ".*\\.spec\\.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  moduleNameMapper: {
    "^\\.\\./prisma/prisma\\.service$": "<rootDir>/test/mocks/prisma-service.ts",
    "^@nestjs/common$": "<rootDir>/test/mocks/nestjs-common.ts",
    "^@nestjs/graphql$": "<rootDir>/test/mocks/nestjs-graphql.ts",
  },
  collectCoverageFrom: ["src/**/*.(t|j)s"],
  coverageDirectory: "./coverage",
  testEnvironment: "node",
};

export default config;
