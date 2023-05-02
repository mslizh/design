import Button from "@mui/material/Button";
import { registerComponent } from "@plasmicapp/host";

export function registerButton() {
  registerComponent(Button, {
    name: "Button",
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
      href: "string",
      size: {
        type: "choice",
        options: ["small", "medium", "large"],
      },
      startIcon: {
        type: "slot",
        hidePlaceholder: true,
      },
      endIcon: {
        type: "slot",
        hidePlaceholder: true,
      },
    },
    importPath: "@mui/material",
  });
}
