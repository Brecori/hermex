# Repository Guidelines

## Project Structure & Module Organization

Hermex is a PNPM workspace on Node 24. Packages live under `apps/*`; root scripts use `--filter`.

- `apps/api`: NestJS GraphQL API, Prisma, and Jest tests.
- `apps/api/src`: modules such as `auth`, `health`, and `prisma`.
- `apps/api/prisma`: Prisma schema.
- `apps/api/src/generated/prisma`: generated Prisma client output; do not edit manually.
- `apps/web`: Next.js app with Tailwind CSS.
- `apps/web/src/app`: routes and global styles.
- `apps/web/src/components`: atomic design components.

## Build, Test, and Development Commands

Run from the root unless noted otherwise.

- `pnpm install`: install dependencies.
- `pnpm install <package> --filter @hermex/api|@hermex/web`: add package dependencies.
- `pnpm db:up` / `pnpm db:down`: start or stop local PostgreSQL.
- `pnpm api:dev`, `pnpm api:build`, `pnpm api:test`, `pnpm api:lint`: run, build, test, or lint API.
- `pnpm web:dev`, `pnpm web:build`, `pnpm web:lint`: run, build, or lint web.
- `pnpm prisma:generate`: regenerate Prisma client files after schema changes.

For Node.js libraries, always use `pnpm install`; never edit dependency entries in `package.json` by hand.

## Coding Style & Naming Conventions

Use TypeScript and each app's ESLint flat config. Name React components in `PascalCase`, such as `Header.tsx`; use lower-case feature folders like `health`. Do not manually edit generated output.

## Backend Guidelines

The API is NestJS GraphQL using Prisma and PostgreSQL from `docker-compose.yaml`. Use Nest generators for new modules/domains instead of creating files manually, for example `pnpm --filter @hermex/api nest generate module vehicles`. Keep GraphQL code-first and regenerate artifacts after schema changes.

## Frontend Guidelines

The web app is Next.js with Tailwind CSS. Keep UI code in `apps/web/src/components` by atomic design level: `atoms`, `molecules`, `organisms`, and `templates`. The app is prepared for authentication; avoid ad hoc auth patterns.

## Testing Guidelines

API tests use Jest with `ts-jest`; test files end in `.spec.ts`. Coverage is collected from `apps/api/src/**/*.(t|j)s`. Add focused tests beside changed API modules and run `pnpm api:test`. No web test runner exists; validate web changes with `pnpm web:lint` and `pnpm web:build`.

## Commit & Pull Request Guidelines

Git history is not readable here, so no project convention can be confirmed. Use short, imperative subjects, for example `Add health resolver tests`. PRs should summarize changes, validation commands, linked issues, and UI screenshots when relevant.

## Security & Configuration Tips

Use `.env.example` as the config reference and keep secrets out of commits. For GraphQL and Prisma changes, update source decorators/schema inputs and regenerate artifacts; do not hand-edit generated files.
