import type { Meta, StoryObj } from "@storybook/react";
import { ViewList } from "@/views/list";

const meta = {
   title: "Views/ViewList",
   component: ViewList,
   parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
      layout: "fullscreen",
   },
   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
   tags: ["autodocs"],
} satisfies Meta<typeof ViewList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllProps: Story = {
   args: {
      items: [
         {
            selectable: true,
            icon: {
               title: "Add",
               variant: "Regular",
            },
            avatar: {
               id: "1",
               firstName: "Иван",
               lastName: "Иванов",
               avatar:
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
            },
            text: {
               primary:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed suscipit erat. Pellentesque nibh augue, hendrerit et ex vel, tristique sollicitudin urna.",
               secondary:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed suscipit erat. Pellentesque nibh augue, hendrerit et ex vel, tristique sollicitudin urna.",
            },
            chips: [
               {
                  icon: {
                     title: "PlayCircle",
                     variant: "Filled",
                     color: "success",
                  },
                  label: "Lorem ipsum dolor sit amet",
               },
               {
                  icon: {
                     title: "PlayCircle",
                     variant: "Filled",
                     color: "success",
                  },
                  label: "Lorem ipsum dolor sit amet",
               },
               {
                  icon: {
                     title: "PlayCircle",
                     variant: "Filled",
                     color: "success",
                  },
                  label: "Lorem ipsum dolor sit amet",
               },
               {
                  icon: {
                     title: "PlayCircle",
                     variant: "Filled",
                     color: "success",
                  },
                  label: "Lorem ipsum dolor sit amet",
               },
            ],
            save: {
               url: "",
            },
            users: [
               {
                  id: "1",
                  firstName: "Иван",
                  lastName: "Иванов",
               },
               {
                  id: "1",
                  firstName: "Иван",
                  lastName: "Иванов",
               },
            ],
         },
         {
            text: {
               primary: "Hello",
            },
            chips: [
               {
                  label: "Chip 1",
               },
               {
                  label: "Chip 2",
               },
               {
                  label: "Chip 3",
               },
               {
                  label: "Chip 4",
               },
            ],
         },
      ],
   },
};
