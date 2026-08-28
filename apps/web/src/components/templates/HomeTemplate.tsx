import { AppStatus } from "@/components/molecules/AppStatus";
import { Header } from "@/components/organisms/Header";

export function HomeTemplate() {
  return (
    <main>
      <Header />
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-3xl font-semibold">Hermex</h1>
        <p className="mt-3 max-w-2xl text-base text-[var(--muted)]">
          Base do monorepo configurada para evoluir o produto.
        </p>
        <div className="mt-8 max-w-lg">
          <AppStatus />
        </div>
      </section>
    </main>
  );
}

