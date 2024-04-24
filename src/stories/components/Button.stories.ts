import { Button } from "@/components/Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
    disabled: false,
    size: "default",
    variant: "default",
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    disabled: {
      control: "boolean",
    },
    size: {
      options: ["default", "sm", "md", "lg", "icon"],
      control: "select",
      table: {
        type: {
          summary: "enum (string)",
          detail: '"default" | "sm" | "md" | "lg" | "icon"',
        },
      },
    },
    variant: {
      options: [
        "default",
        "destructive",
        "secondary",
        "outline",
        "ghost",
        "link",
      ],
      control: "select",
      table: {
        type: {
          summary: "enum (string)",
          detail:
            '"default" | "destructive" | "secondary" | "outline" | "ghost" | "link"',
        },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "default",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};
