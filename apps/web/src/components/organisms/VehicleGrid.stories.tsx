import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { categoryExamples, vehicleExamples } from "@/components/_data/vehicles";

import { VehicleGrid } from "./VehicleGrid";

const meta = {
  component: VehicleGrid,
  parameters: {
    layout: "fullscreen",
  },
  title: "Organisms/VehicleGrid",
} satisfies Meta<typeof VehicleGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    categories: [...categoryExamples],
    vehicles: [...vehicleExamples],
  },
};

export const Empty: Story = {
  args: {
    categories: [...categoryExamples],
    vehicles: [],
  },
};

export const Loading: Story = {
  args: {
    categories: [...categoryExamples],
    isLoading: true,
    vehicles: [...vehicleExamples],
  },
};
