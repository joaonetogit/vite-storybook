import { Button } from "@/components/Button";
import type { Meta } from "@storybook/react";

const meta = {
  component: Button,
  args: {
    children: "Button",
  }
} satisfies Meta<typeof Button>;

export default meta;

export const Default = {};

export const Primary = {};
