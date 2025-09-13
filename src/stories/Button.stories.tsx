import type { Meta, StoryObj } from "@storybook/react-vite";
// import { fn } from "storybook/test";
import { Button } from "../components/ui/Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "radio", options: ["solid", "outline"] },
    size: { control: "radio", options: ["sm", "md", "lg"] },
    color: {
      control: "select",
      options: ["primary", "secondary", "danger", "success"],
    },
  },
  // args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

//デフォ
export const Primary: Story = {
  args: {
    children: "Primary",
    color: "primary",
    variant: "solid",
    size: "md",
  },
};

export const Soild: Story = {
  args: {
    children: "soild",
    color: "primary",
    variant: "solid",
    size: "sm",
  },
};

export const Outline: Story = {
  args: {
    children: "outline",
    color: "primary",
    variant: "outline",
    size: "sm",
  },
};

export const Secondary: Story = {
  args: {
    children: "secondary",
    color: "secondary",
    variant: "outline",
    size: "sm",
  },
};

export const Danger: Story = {
  args: {
    children: "danger",
    color: "danger",
    variant: "outline",
    size: "sm",
  },
};

export const AllColors: Story = {
  args: {
    variant: "solid",
    size: "lg",
  },

  render: () => (
    <div className="flex gap-3 flex-wrap">
      <Button color="primary" variant="solid">
        Primary
      </Button>
      <Button color="secondary" variant="solid">
        Secondary
      </Button>
      <Button color="danger" variant="solid">
        Danger
      </Button>
      <Button color="success" variant="solid">
        Success
      </Button>
      <Button color="primary" variant="outline">
        Primary
      </Button>
      <Button color="secondary" variant="outline">
        Secondary
      </Button>
      <Button color="danger" variant="outline">
        Danger
      </Button>
      <Button color="success" variant="outline">
        Success
      </Button>
    </div>
  ),
};

export const AllSize: Story = {
  render: () => (
    <div className="flex items-baseline gap-10">
      <Button size="sm">sm</Button>
      <Button size="md">md</Button>
      <Button size="lg">lg</Button>
    </div>
  ),
};
