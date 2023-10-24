import { Button } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
   title: "Components/Button",
   component: Button,
   parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
      layout: "centered",
   },
   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
   tags: ["autodocs"],
   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Contained: Story = {
   args: {
      variant: "contained",
      color: "primary",
      children: "Button",
   },
};

export const Outlined: Story = {
   args: {
      variant: "outlined",
      color: "secondary",
      children: "Button",
   },
};

export const Text: Story = {
   args: {
      variant: "text",
      color: "error",
      children: "Button",
   },
};
