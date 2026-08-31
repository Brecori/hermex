import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { HeroBanner } from "./HeroBanner";

const meta = {
  component: HeroBanner,
  parameters: {
    layout: "fullscreen",
  },
  title: "Organisms/HeroBanner",
} satisfies Meta<typeof HeroBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
