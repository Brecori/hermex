import type { AnchorHTMLAttributes } from "react";

import { AssetImage } from "@/components/atoms/AssetImage";
import { cn } from "@/components/_utils/classNames";

type SocialPlatform = "instagram" | "tiktok" | "whatsapp";

type SocialIconLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string;
  platform: SocialPlatform;
  src: string;
};

export function SocialIconLink({
  className,
  label,
  platform,
  src,
  ...props
}: SocialIconLinkProps) {
  return (
    <a
      aria-label={label}
      className={cn(
        "inline-flex size-8 items-center justify-center rounded text-[var(--brand-primary-pure)] transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-pure)] focus:ring-offset-2",
        className,
      )}
      data-platform={platform}
      {...props}
    >
      <AssetImage alt="" aria-hidden className="size-8" src={src} />
    </a>
  );
}
