import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { AssetImage } from "./AssetImage";

const meta = {
  component: AssetImage,
  title: "Atoms/AssetImage",
} satisfies Meta<typeof AssetImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Vehicle: Story = {
  args: {
    alt: "Hyundai HB20 1.0 preto",
    className: "h-40 w-70 bg-[#e7e7e7]",
    src: "/assets/hermex/vehicles/hb20.png",
  },
};
