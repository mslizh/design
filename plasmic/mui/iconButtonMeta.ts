import { CodeComponentMeta } from "@plasmicapp/host";
import { IconButtonProps } from "@mui/material";

export const iconButtonMeta: CodeComponentMeta<IconButtonProps> = {
  name: "IconButton",
  props: {
    children: "slot",
      color: {
        type: "choice",
        options: [
          "inherit",
          "default",
          "primary",
          "secondary",
          "error",
          "info",
          "success",
          "warning",
        ],
      },
      disabled: "boolean",
      edge: {
        type: "choice",
        options: ["end", "start"],
      },
      size: {
        type: "choice",
        options: ["small", "medium", "large"],
      },
      onClick: {
        type: "eventHandler",
        argTypes: [],
      },
      sx: "object"
  },
  importPath: "@mui/material"
}