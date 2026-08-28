import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { SearchInput } from "./SearchInput";

const meta = {
  component: SearchInput,
  title: "Molecules/SearchInput",
} satisfies Meta<typeof SearchInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "O que você procura?",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "O que você procura?",
  },
};
