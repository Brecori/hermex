import Image from "next/image";

import { Text } from "@/components/atoms/Text";

export function HeroBanner() {
  return (
    <section className="w-full overflow-hidden bg-[var(--brand-primary-pure)]">
      <div className="mx-auto grid min-h-[420px] max-w-6xl items-center gap-8 px-4 pb-24 pt-12 sm:px-6 md:grid-cols-[1fr_0.9fr] md:pb-28">
        <div className="max-w-2xl">
          <Text as="h1" className="text-white" variant="heroTitle">
            Encontre o carro <em className="font-normal">ideal</em> para todas as
            ocasiões
          </Text>
        </div>
        <div className="relative flex min-h-[240px] items-center justify-center md:min-h-[320px]">
          <Image
            alt="Carro disponível para locação"
            className="relative z-10 h-auto w-full max-w-[520px] object-contain"
            height={360}
            priority
            src="/assets/hermex/vehicles/hb20.png"
            width={560}
          />
          <div
            aria-hidden="true"
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 text-[96px] font-bold leading-none text-[var(--brand-secondary-pure)]/90 md:block"
          >
            &gt;&gt;
          </div>
        </div>
      </div>
    </section>
  );
}
