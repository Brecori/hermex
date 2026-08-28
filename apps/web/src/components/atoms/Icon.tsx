import { cn } from "@/components/_utils/classNames";

export type IconName =
  | "account_circle"
  | "calendar_month"
  | "keyboard_arrow_down"
  | "location_on"
  | "login"
  | "search";

type IconProps = {
  "aria-hidden"?: boolean;
  className?: string;
  name: IconName;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-xl",
};

export function Icon({
  "aria-hidden": ariaHidden = true,
  className,
  name,
  size = "md",
}: IconProps) {
  return (
    <span
      aria-hidden={ariaHidden}
      className={cn("material-symbols-outlined shrink-0", sizes[size], className)}
    >
      {name}
    </span>
  );
}
