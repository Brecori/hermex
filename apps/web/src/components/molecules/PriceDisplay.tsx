import { Text } from "@/components/atoms/Text";
import { cn } from "@/components/_utils/classNames";

type PriceDisplayProps = {
  amount: number | string;
  className?: string;
  suffix?: string;
};

function formatAmount(amount: number | string) {
  if (typeof amount === "number") {
    return new Intl.NumberFormat("pt-BR", {
      currency: "BRL",
      maximumFractionDigits: 0,
      style: "currency",
    }).format(amount);
  }

  return amount.startsWith("R$") ? amount : `R$${amount}`;
}

export function PriceDisplay({
  amount,
  className,
  suffix = "/diária",
}: PriceDisplayProps) {
  return (
    <div className={cn("flex items-baseline text-black", className)}>
      <Text as="span" variant="price">
        {formatAmount(amount)}
      </Text>
      <Text as="span" className="ml-0.5 text-xl" variant="body">
        {suffix}
      </Text>
    </div>
  );
}
