import { cn } from "@/components/_utils/classNames";

type LogoVariant = "default" | "light";

type LogoProps = {
  className?: string;
  height?: number;
  variant?: LogoVariant;
  width?: number;
};

const assets: Record<LogoVariant, { mark: string; text: string }> = {
  default: {
    mark: "/assets/hermex/logo/hermex-logo-mark.svg",
    text: "/assets/hermex/logo/hermex-logo-text.svg",
  },
  light: {
    mark: "/assets/hermex/logo/hermex-logo-light-mark.svg",
    text: "/assets/hermex/logo/hermex-logo-light-text.svg",
  },
};

export function Logo({
  className,
  height = 60,
  variant = "default",
  width = 180,
}: LogoProps) {
  return (
    <span
      aria-label="Hermex Locadora"
      className={cn("relative inline-block overflow-hidden", className)}
      role="img"
      style={{ height, width }}
    >
      <img
        alt=""
        className="absolute inset-x-[8%] top-[10%] h-[49%] w-[84%]"
        src={assets[variant].mark}
      />
      <img
        alt=""
        className="absolute bottom-[16%] right-[9%] h-[18%] w-[43%]"
        src={assets[variant].text}
      />
    </span>
  );
}
