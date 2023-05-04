import Checkbox from "@mui/material/Checkbox";
import { registerComponent } from "@plasmicapp/host";

export function registerCheckbox() {
  registerComponent(Checkbox, {
    name: "Checkbox",
    props: {
      checked: {
        type: "boolean",
      },
      defaultChecked: {
        type: "boolean",
      },
      onClick: {
        type: "eventHandler",
        argTypes: [],
      },
      indeterminate: "boolean",
      disabled: "boolean",
      required: "boolean",
      color: {
        type: "choice",
        options: [
          "default",
          "primary",
          "secondary",
          "error",
          "info",
          "success",
          "warning",
        ],
      },
      size: {
        type: "choice",
        options: ["medium", "small"],
      },
    },
    importPath: "@mui/material",
  });
}
