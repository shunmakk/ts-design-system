import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "../components/ui/Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "radio", options: ["outline", "filled"] },
    size: { control: "radio", options: ["sm", "md", "lg"] },
    state: { control: "radio", options: ["default", "error", "success"] },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "テキストを入力",
    variant: "outline",
    size: "md",
    state: "default",
  },
};

export const Error: Story = {
  args: {
    placeholder: "テキストを入力",
    variant: "outline",
    size: "md",
    state: "error",
    errorMessage: "This field is required",
  },
};
