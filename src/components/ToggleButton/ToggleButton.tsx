import { ToggleButtonGroupProps, ToggleButtonProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";

export const TOGGLE_BUTTON_META: CodeComponentMeta<ToggleButtonProps> = {
   name: "ToggleButton",
   props: {
      children: "slot",
      value: "string",
      color: {
         type: "choice",
         options: [
            "standard",
            "primary",
            "secondary",
            "error",
            "info",
            "success",
            "warning",
         ],
      },
      fullWidth: "boolean",
      disabled: "boolean",
      selected: "boolean",
      size: {
         type: "choice",
         options: ["small", "medium", "large"],
      },
      onClick: {
         type: "eventHandler",
         argTypes: [],
      },
      onChange: {
         type: "eventHandler",
         argTypes: [],
      },
   },
   styleSections: ["visibility"],
};

export const TOGGLE_BUTTON_GROUP_META: CodeComponentMeta<ToggleButtonGroupProps> =
   {
      name: "ToggleButtonGroup",
      props: {
         children: "slot",
         value: "string",
         color: {
            type: "choice",
            options: [
               "standard",
               "primary",
               "secondary",
               "error",
               "info",
               "success",
               "warning",
            ],
         },
         fullWidth: "boolean",
         orientation: {
            type: "choice",
            options: ["horizontal", "vertical"],
         },
         size: {
            type: "choice",
            options: ["small", "medium", "large"],
         },
         disabled: "boolean",
         exclusive: {
            type: "boolean",
            helpText:
               "If true, only allow one of the child ToggleButton values to be selected.",
         },
         onChange: {
            type: "eventHandler",
            argTypes: [],
         },
         sx: "object",
      },
      styleSections: ["visibility"],
   };
