import type { MouseEventHandler } from "react";

import { AssetImage } from "@/components/atoms/AssetImage";
import { getButtonClassName } from "@/components/atoms/Button";
import { Text } from "@/components/atoms/Text";
import { PriceDisplay } from "@/components/molecules/PriceDisplay";
import { cn } from "@/components/_utils/classNames";

type VehicleCardProps = {
  className?: string;
  dailyPrice: number | string;
  description: string;
  href?: string;
  imageAlt: string;
  imageSrc: string;
  onDetailsClick?: MouseEventHandler<HTMLButtonElement>;
  vehicleName: string;
};

export function VehicleCard({
  className,
  dailyPrice,
  description,
  href,
  imageAlt,
  imageSrc,
  onDetailsClick,
  vehicleName,
}: VehicleCardProps) {
  const actionClassName = getButtonClassName({
    className: "w-full",
    size: "sm",
    variant: "primary",
  });

  return (
    <article
      className={cn(
        "flex w-full max-w-[360px] flex-col gap-4 rounded bg-white p-8 shadow-[0_0_10px_rgba(132,132,132,0.2)]",
        className,
      )}
    >
      <div className="flex h-40 w-full items-center justify-center bg-[#e7e7e7]">
        <AssetImage alt={imageAlt} className="h-full w-full" src={imageSrc} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="min-h-[57px]">
          <Text as="h3" className="line-clamp-2 text-black" variant="cardTitle">
            {vehicleName}
          </Text>
          <Text className="mt-2 line-clamp-2 text-black" variant="body">
            {description}
          </Text>
        </div>
        <PriceDisplay amount={dailyPrice} />
        {href ? (
          <a className={actionClassName} href={href}>
            Ver detalhes
          </a>
        ) : (
          <button className={actionClassName} onClick={onDetailsClick} type="button">
            Ver detalhes
          </button>
        )}
      </div>
    </article>
  );
}
