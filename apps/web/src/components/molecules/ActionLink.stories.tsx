import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ActionLink } from "./ActionLink";

const meta = {
  component: ActionLink,
  title: "Molecules/ActionLink",
} satisfies Meta<typeof ActionLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Cadastro: Story = {
  args: {
    children: "Cadastro",
    href: "#cadastro",
    icon: "account_circle",
  },
};

export const Login: Story = {
  args: {
    children: "Login",
    href: "#login",
    icon: "login",
  },
};
