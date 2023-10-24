import type { Meta, StoryObj } from "@storybook/react";
import { ViewListItem } from "@/views/list";

const meta = {
   title: "Views/ViewListItem",
   component: ViewListItem,
   parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
      // layout: "centered",
   },
   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
   tags: ["autodocs"],
} satisfies Meta<typeof ViewListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllProps: Story = {
   args: {
      selectable: true,
      removable: true,
      icon: {
         title: "PlayCircle",
         variant: "Filled",
         color: "success",
      },
      avatar: {
         id: "1",
         firstName: "John",
         lastName: "Smith",
      },
      text: {
         primary: "This component will have an automatically generated Autodocs entry",
         secondary: "This component will have an automatically generated Autodocs entry",
         clip: true,
      },
      chips: [
         {
            icon: {
               title: "Add",
               variant: "Regular",
            },
            label: "Test",
         },
         {
            icon: {
               title: "Add",
               variant: "Regular",
            },
            label: "Test",
         },
         {
            icon: {
               title: "Add",
               variant: "Regular",
            },
            label: "Test",
         },
         {
            icon: {
               title: "Add",
               variant: "Regular",
            },
            label: "Test",
         },
      ],
      save: {
         url: "",
      },
      users: [
         {
            id: "1",
            firstName: "John",
            lastName: "Smith",
         },
         {
            id: "2",
            firstName: "John",
            lastName: "Smith",
         },
         {
            id: "3",
            firstName: "John",
            lastName: "Smith",
         },
      ],
   },
};
