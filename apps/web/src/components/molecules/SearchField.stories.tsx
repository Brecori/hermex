import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { SearchField } from "./SearchField";

const meta = {
  component: SearchField,
  title: "Molecules/SearchField",
} satisfies Meta<typeof SearchField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SearchBarFields: Story = {
  args: {
    label: "Local de retirada",
  },
  decorators: [
    (Story) => (
      <div className="max-w-4xl bg-[var(--brand-primary-dark)] p-8">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="grid gap-4 sm:grid-cols-[1fr_128px_128px]">
      <SearchField label="Local de retirada" variant="location" />
      <SearchField label="Data" variant="date" />
      <SearchField isDropdown label="Horário" variant="time" />
      <SearchField label="Local de devolução" variant="location" />
      <SearchField label="Data" variant="date" />
      <SearchField isDropdown label="Horário" variant="time" />
    </div>
  ),
};

export const DarkTone: Story = {
  args: {
    isDropdown: true,
    label: "Selecione a categoria",
    tone: "dark",
    variant: "time",
  },
};
