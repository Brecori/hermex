import type { ImgHTMLAttributes } from "react";

import { cn } from "@/components/_utils/classNames";

type AssetImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  alt: string;
  src: string;
};

export function AssetImage({ alt, className, src, ...props }: AssetImageProps) {
  return (
    <img
      alt={alt}
      className={cn("block max-w-full object-contain", className)}
      src={src}
      {...props}
    />
  );
}
