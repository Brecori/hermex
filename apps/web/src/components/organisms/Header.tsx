import { Logo } from "@/components/atoms/Logo";
import { ActionLink, SearchInput } from "@/components/molecules";

export function Header() {
  return (
    <header className="w-full bg-[var(--brand-secondary-pure)]">
      <div className="mx-auto flex min-h-20 w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a aria-label="Hermex Locadora" className="shrink-0" href="/">
          <Logo height={58} variant="light" width={150} />
        </a>
        <SearchInput
          className="hidden max-w-[320px] flex-1 border-white bg-transparent text-white placeholder:text-white sm:flex"
          placeholder="O que você procura?"
        />
        <nav aria-label="Acesso" className="flex shrink-0 items-center gap-3 sm:gap-6">
          <ActionLink className="text-white" href="/cadastro" icon="person_add">
            Cadastro
          </ActionLink>
          <ActionLink className="text-white" href="/login" icon="login">
            Login
          </ActionLink>
        </nav>
      </div>
    </header>
  );
}
