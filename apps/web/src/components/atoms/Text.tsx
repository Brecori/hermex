import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/components/_utils/classNames";

type TextVariant = "body" | "caption" | "cardTitle" | "price" | "heroTitle";

type TextProps<TElement extends ElementType = "p"> = {
  as?: TElement;
  children: ReactNode;
  className?: string;
  variant?: TextVariant;
} & Omit<ComponentPropsWithoutRef<TElement>, "as" | "children" | "className">;

const variants: Record<TextVariant, string> = {
  body: "text-base font-normal leading-[1.2]",
  caption: "text-sm font-normal leading-[1.2]",
  cardTitle: "text-xl font-normal leading-[1.25]",
  price: "text-[25px] font-bold leading-[1.25]",
  heroTitle: "text-5xl font-bold leading-[1.15] md:text-[76px] md:leading-[1.25]",
};

export function Text<TElement extends ElementType = "p">({
  as,
  children,
  className,
  variant = "body",
  ...props
}: TextProps<TElement>) {
  const Component = as || "p";

  return (
    <Component className={cn(variants[variant], className)} {...props}>
      {children}
    </Component>
  );
}
