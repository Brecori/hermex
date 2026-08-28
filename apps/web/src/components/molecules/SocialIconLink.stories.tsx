import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { SocialIconLink } from "./SocialIconLink";

const meta = {
  component: SocialIconLink,
  title: "Molecules/SocialIconLink",
} satisfies Meta<typeof SocialIconLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    href: "#whatsapp",
    label: "Whatsapp",
    platform: "whatsapp",
    src: "/assets/hermex/social/whatsapp.svg",
  },
  decorators: [
    (Story) => (
      <div className="inline-flex bg-[var(--brand-secondary-dark)] p-6">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="flex gap-2">
      <SocialIconLink
        href="#whatsapp"
        label="Whatsapp"
        platform="whatsapp"
        src="/assets/hermex/social/whatsapp.svg"
      />
      <SocialIconLink
        href="#instagram"
        label="Instagram"
        platform="instagram"
        src="/assets/hermex/social/instagram.svg"
      />
      <SocialIconLink
        href="#tiktok"
        label="TikTok"
        platform="tiktok"
        src="/assets/hermex/social/tiktok.svg"
      />
    </div>
  ),
};
