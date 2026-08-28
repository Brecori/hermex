import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { vehicleExamples } from "@/components/_data/vehicles";

import { VehicleCard } from "./VehicleCard";

const meta = {
  component: VehicleCard,
  title: "Molecules/VehicleCard",
} satisfies Meta<typeof VehicleCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...vehicleExamples[0],
  },
};

export const Grid: Story = {
  args: {
    ...vehicleExamples[0],
  },
  render: () => (
    <div className="grid max-w-[1200px] gap-10 sm:grid-cols-2 xl:grid-cols-3">
      {vehicleExamples.map((vehicle) => (
        <VehicleCard key={vehicle.vehicleName} {...vehicle} />
      ))}
    </div>
  ),
};
