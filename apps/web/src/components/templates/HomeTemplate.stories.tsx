import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { categoryExamples, vehicleExamples } from "@/components/_data/vehicles";

import { HomeTemplate } from "./HomeTemplate";

const meta = {
  args: {
    categories: [...categoryExamples],
    vehicles: [...vehicleExamples],
  },
  component: HomeTemplate,
  parameters: {
    layout: "fullscreen",
  },
  title: "Templates/HomeTemplate",
} satisfies Meta<typeof HomeTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
