import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Logo } from "./Logo";

const meta = {
  component: Logo,
  title: "Atoms/Logo",
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Light: Story = {
  args: {
    variant: "light",
  },
  decorators: [
    (Story) => (
      <div className="bg-[var(--brand-secondary-dark)] p-6">
        <Story />
      </div>
    ),
  ],
};
