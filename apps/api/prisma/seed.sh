set -eu

pnpm build
node prisma/seed.mjs
