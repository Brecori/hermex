import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/components/_utils/classNames";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "full";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  buttonSize?: ButtonSize;
  isFullWidth?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-[var(--brand-primary-pure)] text-white hover:brightness-95",
  secondary: "bg-[var(--brand-secondary-pure)] text-white hover:brightness-110",
  ghost:
    "border border-[var(--brand-secondary-pure)] bg-transparent text-[var(--brand-secondary-pure)] hover:bg-[var(--brand-secondary-pure)] hover:text-white",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-[35px] px-3 text-sm",
  md: "h-[43px] px-4 text-base",
  full: "h-[43px] w-full px-4 text-base",
};

export function getButtonClassName({
  className,
  isFullWidth = false,
  size = "md",
  variant = "primary",
}: {
  className?: string;
  isFullWidth?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded px-4 font-medium leading-[1.2] transition focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-pure)] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    sizes[size],
    isFullWidth && "w-full",
    className,
  );
}

export function Button({
  buttonSize = "md",
  className,
  isFullWidth = false,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={getButtonClassName({
        className,
        isFullWidth,
        size: buttonSize,
        variant,
      })}
      type={type}
      {...props}
    />
  );
}
