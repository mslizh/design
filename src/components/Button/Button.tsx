import { ButtonProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";

export const BUTTON_META: CodeComponentMeta<ButtonProps> = {
   name: "Button",
   trapsFocus: true,
   props: {
      children: {
         type: "slot",
         // mergeWithParent: true
      },
      color: {
         type: "choice",
         options: [
            "inherit",
            "primary",
            "secondary",
            "success",
            "error",
            "info",
            "warning",
         ],
      },
      disabled: "boolean",
      disableElevation: "boolean",
      fullWidth: "boolean",
      endIcon: {
         type: "slot",
         hidePlaceholder: true,
         // mergeWithParent: true,
      },
      href: "href",
      onClick: {
         type: "eventHandler",
         argTypes: [],
      },
      size: {
         type: "choice",
         options: ["small", "medium", "large"],
      },
      startIcon: {
         type: "slot",
         hidePlaceholder: true,
      },
      variant: {
         type: "choice",
         options: ["contained", "outlined", "text"],
      },
   },
   templates: {
      ["Default"]: {
         props: {
            children: [
               {
                  type: "component",
                  name: "Typography",
               },
            ],
         },
      },
      ["With Start Icon"]: {
         props: {
            startIcon: {
               type: "component",
               name: "Icon",
            },
            children: {
               type: "component",
               name: "Typography",
            },
         },
      },
      ["With End Icon"]: {
         props: {
            endIcon: {
               type: "component",
               name: "Icon",
            },
            children: {
               type: "component",
               name: "Typography",
            },
         },
      },
   },
   styleSections: ["visibility"],
};
