import { ToggleButtonGroup } from "@mui/material";
import { registerComponent } from "@plasmicapp/host";

export function registerToggleButtonGroup() {
  registerComponent(ToggleButtonGroup, {
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
    },
    importPath: "@mui/material",
  });
}
