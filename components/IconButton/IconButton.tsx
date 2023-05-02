import IconButton from "@mui/material/IconButton";
import { registerComponent } from "@plasmicapp/host";

export function registerIconButton() {
  registerComponent(IconButton, {
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
    },
    importPath: "@mui/material",
  });
}
