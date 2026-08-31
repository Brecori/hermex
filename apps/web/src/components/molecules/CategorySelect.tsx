import type { SelectHTMLAttributes } from "react";

import { Icon } from "@/components/atoms/Icon";
import { cn } from "@/components/_utils/classNames";

type CategoryOption = {
  label: string;
  value: string;
};

type CategorySelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  emptyOptionLabel?: string;
  options?: CategoryOption[];
  placeholder?: string;
};

export function CategorySelect({
  className,
  emptyOptionLabel,
  options = [],
  placeholder = "Selecione a categoria",
  ...props
}: CategorySelectProps) {
  return (
    <label className={cn("relative inline-flex h-[43px] min-w-[219px]", className)}>
      <span className="sr-only">{placeholder}</span>
      <select
        className="h-full w-full appearance-none rounded border border-[var(--brand-secondary-pure)] bg-white px-4 pr-10 text-base leading-[1.2] text-[var(--brand-secondary-pure)] outline-none focus:ring-2 focus:ring-[var(--brand-primary-pure)]"
        defaultValue=""
        {...props}
      >
        {emptyOptionLabel ? (
          <option value="">{emptyOptionLabel}</option>
        ) : (
          <option disabled value="">
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Icon
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--brand-secondary-pure)]"
        name="keyboard_arrow_down"
      />
    </label>
  );
}
