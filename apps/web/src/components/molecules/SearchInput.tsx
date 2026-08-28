import type { InputHTMLAttributes } from "react";

import { Icon } from "@/components/atoms/Icon";
import { cn } from "@/components/_utils/classNames";

type SearchInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: string;
};

export function SearchInput({
  className,
  label = "Busca",
  placeholder = "O que você procura?",
  ...props
}: SearchInputProps) {
  return (
    <label
      className={cn(
        "flex h-[43px] w-full items-center gap-2 rounded border border-[var(--neutral-details)] bg-white px-4 text-[var(--neutral-text)] focus-within:ring-2 focus-within:ring-[var(--brand-primary-pure)] sm:w-[219px]",
        className,
      )}
    >
      <span className="sr-only">{label}</span>
      <Icon name="search" />
      <input
        className="min-w-0 flex-1 bg-transparent text-base leading-[1.2] outline-none placeholder:text-[var(--neutral-text)]"
        placeholder={placeholder}
        type="search"
        {...props}
      />
    </label>
  );
}
