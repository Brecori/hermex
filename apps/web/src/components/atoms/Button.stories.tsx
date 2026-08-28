import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "./Button";

const meta = {
  component: Button,
  title: "Atoms/Button",
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Ver detalhes",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Buscar",
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    children: "Alterar",
    variant: "ghost",
  },
};

export const FullWidth: Story = {
  args: {
    buttonSize: "full",
    children: "Ver detalhes",
    isFullWidth: true,
  },
};
