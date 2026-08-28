import type { AnchorHTMLAttributes, ReactNode } from "react";

import { Icon, type IconName } from "@/components/atoms/Icon";
import { cn } from "@/components/_utils/classNames";

type ActionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  icon: IconName;
};

export function ActionLink({ children, className, icon, ...props }: ActionLinkProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center gap-2 text-base leading-normal text-[var(--neutral-text)] transition hover:text-[var(--brand-primary-pure)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-pure)] focus:ring-offset-2",
        className,
      )}
      {...props}
    >
      <Icon name={icon} />
      <span>{children}</span>
    </a>
  );
}
