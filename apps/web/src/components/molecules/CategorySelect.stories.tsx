import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { CategorySelect } from "./CategorySelect";

const meta = {
  component: CategorySelect,
  title: "Molecules/CategorySelect",
} satisfies Meta<typeof CategorySelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { label: "Hatch", value: "hatch" },
      { label: "Sedan", value: "sedan" },
      { label: "SUV", value: "suv" },
    ],
  },
};
