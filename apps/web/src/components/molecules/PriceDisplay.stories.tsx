import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { PriceDisplay } from "./PriceDisplay";

const meta = {
  component: PriceDisplay,
  title: "Molecules/PriceDisplay",
} satisfies Meta<typeof PriceDisplay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    amount: 120,
  },
};
