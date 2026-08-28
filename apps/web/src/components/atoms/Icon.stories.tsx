import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Icon, type IconName } from "./Icon";

const icons: IconName[] = [
  "search",
  "account_circle",
  "login",
  "location_on",
  "calendar_month",
  "keyboard_arrow_down",
];

const meta = {
  component: Icon,
  title: "Atoms/Icon",
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    name: "search",
  },
  render: () => (
    <div className="flex flex-wrap gap-4 text-[var(--neutral-text)]">
      {icons.map((icon) => (
        <div className="flex items-center gap-2 rounded border p-3" key={icon}>
          <Icon name={icon} />
          <span className="text-sm">{icon}</span>
        </div>
      ))}
    </div>
  ),
};
