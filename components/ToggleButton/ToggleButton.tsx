import ToggleButton from "@mui/material/ToggleButton";
import { registerComponent } from "@plasmicapp/host";

export function registerToggleButton() {
  registerComponent(ToggleButton, {
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
    importPath: "@mui/material",
  });
}
