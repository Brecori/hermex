"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/atoms/Button";
import { Icon, type IconName } from "@/components/atoms/Icon";
import { cn } from "@/components/_utils/classNames";

export type SearchBarValues = {
  pickupLocation: string;
  returnLocation: string;
  pickupDate: string;
  pickupTime: string;
  returnDate: string;
  returnTime: string;
};

type SearchBarProps = {
  className?: string;
  errorMessage?: string;
  onClear?: () => void;
  onSearch?: (values: SearchBarValues) => void;
  showClearButton?: boolean;
};

const initialValues: SearchBarValues = {
  pickupDate: "",
  pickupLocation: "",
  pickupTime: "",
  returnDate: "",
  returnLocation: "",
  returnTime: "",
};

function SearchBarInput({
  icon,
  label,
  onChange,
  type = "text",
  value,
}: {
  icon: IconName;
  label: string;
  onChange: (value: string) => void;
  type?: "date" | "text" | "time";
  value: string;
}) {
  return (
    <label className="flex h-[43px] min-w-0 items-center gap-2 rounded border border-white px-4 text-white focus-within:ring-2 focus-within:ring-white">
      <Icon name={icon} />
      <span className="sr-only">{label}</span>
      <input
        className="min-w-0 flex-1 bg-transparent text-base leading-[1.2] text-white outline-none placeholder:text-white/90 [color-scheme:dark]"
        onChange={(event) => onChange(event.target.value)}
        placeholder={label}
        type={type}
        value={value}
      />
    </label>
  );
}

export function SearchBar({
  className,
  errorMessage,
  onClear,
  onSearch,
  showClearButton = false,
}: SearchBarProps) {
  const [values, setValues] = useState<SearchBarValues>(initialValues);

  function updateValue(field: keyof SearchBarValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch?.(values);
  }

  function handleClear() {
    setValues(initialValues);
    onClear?.();
  }

  return (
    <form
      className={cn(
        "w-full rounded bg-[var(--brand-secondary-pure)] p-4 shadow-[0_10px_30px_rgba(29,47,64,0.22)] sm:p-6",
        className,
      )}
      onSubmit={handleSubmit}
    >
      <div className="grid gap-4">
        <div className="grid gap-4 lg:grid-cols-[minmax(220px,1fr)_180px_140px]">
          <SearchBarInput
            icon="location_on"
            label="Local de retirada"
            onChange={(value) => updateValue("pickupLocation", value)}
            value={values.pickupLocation}
          />
          <SearchBarInput
            icon="calendar_today"
            label="Data"
            onChange={(value) => updateValue("pickupDate", value)}
            type="date"
            value={values.pickupDate}
          />
          <SearchBarInput
            icon="schedule"
            label="Hora"
            onChange={(value) => updateValue("pickupTime", value)}
            type="time"
            value={values.pickupTime}
          />
        </div>
        <div className="grid gap-4 lg:grid-cols-[minmax(220px,1fr)_180px_140px_140px]">
          <SearchBarInput
            icon="location_on"
            label="Local de devolução"
            onChange={(value) => updateValue("returnLocation", value)}
            value={values.returnLocation}
          />
          <SearchBarInput
            icon="calendar_today"
            label="Data"
            onChange={(value) => updateValue("returnDate", value)}
            type="date"
            value={values.returnDate}
          />
          <SearchBarInput
            icon="schedule"
            label="Hora"
            onChange={(value) => updateValue("returnTime", value)}
            type="time"
            value={values.returnTime}
          />
          <Button className="h-[43px]" type="submit">
            Buscar
          </Button>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        {errorMessage ? <p className="text-sm text-white">{errorMessage}</p> : <span />}
        {showClearButton ? (
          <button
            className="text-sm font-medium text-white underline underline-offset-4"
            onClick={handleClear}
            type="button"
          >
            Limpar busca
          </button>
        ) : null}
      </div>
    </form>
  );
}
