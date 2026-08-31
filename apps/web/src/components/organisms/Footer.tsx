import { Logo } from "@/components/atoms/Logo";
import { Text } from "@/components/atoms/Text";
import { SocialIconLink } from "@/components/molecules/SocialIconLink";

type FooterProps = {
  instagramHref: string;
  tiktokHref: string;
  whatsappHref: string;
};

export function Footer({ instagramHref, tiktokHref, whatsappHref }: FooterProps) {
  return (
    <footer className="w-full bg-[var(--brand-secondary-pure)] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-md">
          <Logo height={58} variant="light" width={150} />
          <Text className="mt-4 text-white" variant="body">
            Desenvolvido por Alura. Projeto fictício sem fins comerciais.
          </Text>
          <Text className="mt-2 text-white/80" variant="caption">
            O carro ideal para sua viagem.
          </Text>
        </div>
        <div>
          <Text className="mb-3 text-white" variant="body">
            Siga nossas redes:
          </Text>
          <div className="flex gap-4">
            <SocialIconLink
              href={whatsappHref}
              label="WhatsApp Hermex"
              platform="whatsapp"
              rel="noreferrer"
              src="/assets/hermex/social/whatsapp.svg"
              target="_blank"
            />
            <SocialIconLink
              href={instagramHref}
              label="Instagram Hermex"
              platform="instagram"
              rel="noreferrer"
              src="/assets/hermex/social/instagram.svg"
              target="_blank"
            />
            <SocialIconLink
              href={tiktokHref}
              label="TikTok Hermex"
              platform="tiktok"
              rel="noreferrer"
              src="/assets/hermex/social/tiktok.svg"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
