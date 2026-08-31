import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { SearchBar } from "./SearchBar";

const meta = {
  component: SearchBar,
  parameters: {
    layout: "centered",
  },
  title: "Organisms/SearchBar",
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSearch: (values) => {
      console.log("SearchBar onSearch", values);
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[min(1100px,calc(100vw-32px))]">
        <Story />
      </div>
    ),
  ],
};

export const WithError: Story = {
  args: {
    errorMessage: "A data de devolução deve ser posterior à retirada.",
    showClearButton: true,
  },
  decorators: Default.decorators,
};
