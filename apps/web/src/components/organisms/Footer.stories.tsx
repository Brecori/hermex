import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Footer } from "./Footer";

const meta = {
  args: {
    instagramHref: "https://www.instagram.com/",
    tiktokHref: "https://www.tiktok.com/",
    whatsappHref: "https://www.whatsapp.com/",
  },
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  title: "Organisms/Footer",
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
