import { ButtonGroupProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const buttonGroupMeta: CodeComponentMeta<ButtonGroupProps> = {
   name: "ButtonGroup",
   props: {
      children: "slot",
      variant: {
         type: "choice",
         options: ["contained", "outlined", "text"],
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
      orientation: {
         type: "choice",
         options: ["horizontal", "vertical"],
      },
      size: {
         type: "choice",
         options: ["small", "medium", "large"],
      },
   },
   importPath: "@mui/material",
};
