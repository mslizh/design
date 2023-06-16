import { ButtonProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const buttonMeta: CodeComponentMeta<ButtonProps> = {
   name: "Button",
   props: {
      children: "slot",
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
      },
      href: "string",
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
   importPath: "@mui/material",
};
