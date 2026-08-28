import { Icon, type IconName } from "@/components/atoms/Icon";
import { cn } from "@/components/_utils/classNames";

type SearchFieldVariant = "location" | "date" | "time";

type SearchFieldProps = {
  className?: string;
  icon?: IconName;
  isDropdown?: boolean;
  label: string;
  tone?: "light" | "dark";
  value?: string;
  variant?: SearchFieldVariant;
};

const defaultIcons: Record<SearchFieldVariant, IconName | undefined> = {
  date: "calendar_month",
  location: "location_on",
  time: undefined,
};

export function SearchField({
  className,
  icon,
  isDropdown = false,
  label,
  tone = "light",
  value,
  variant = "location",
}: SearchFieldProps) {
  const currentIcon = icon ?? defaultIcons[variant];
  const isLight = tone === "light";

  return (
    <button
      className={cn(
        "flex h-[43px] w-full items-center gap-2 rounded border px-4 py-3 text-left text-base leading-[1.2] transition focus:outline-none focus:ring-2 focus:ring-offset-2",
        isLight
          ? "border-white text-white focus:ring-white focus:ring-offset-[var(--brand-primary-dark)]"
          : "border-[var(--brand-secondary-pure)] text-[var(--brand-secondary-pure)] focus:ring-[var(--brand-primary-pure)]",
        className,
      )}
      type="button"
    >
      {currentIcon ? <Icon name={currentIcon} /> : null}
      <span className="min-w-0 flex-1 truncate">{value || label}</span>
      {isDropdown ? <Icon name="keyboard_arrow_down" /> : null}
    </button>
  );
}
