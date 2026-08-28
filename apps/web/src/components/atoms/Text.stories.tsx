import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Text } from "./Text";

const meta = {
  component: Text,
  title: "Atoms/Text",
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  args: {
    children: "Hermex",
  },
  render: () => (
    <div className="grid gap-4">
      <Text variant="heroTitle">
        <span className="text-[var(--brand-primary-pure)]">Encontre o carro ideal</span>{" "}
        <span className="text-[var(--brand-secondary-dark)]">para todas as ocasiões</span>
      </Text>
      <Text variant="cardTitle">Hyundai HB20 1.0</Text>
      <Text variant="body">Hatch Manual</Text>
      <Text variant="price">R$120</Text>
      <Text variant="caption">O carro ideal para sua ocasião</Text>
    </div>
  ),
};
