import Tooltip from "@mui/material/Tooltip";
import { registerComponent } from "@plasmicapp/host";

export function registerTooltip() {
  registerComponent(Tooltip, {
    name: "Tooltip",
    props: {
      title: "slot",
      children: "slot",
      followCursor: "boolean",
      open: "boolean",
      placement: {
        type: "choice",
        defaultValue: "bottom",
        options: [
          "bottom-end",
          "bottom-start",
          "bottom",
          "left-end",
          "left-start",
          "left",
          "right-end",
          "right-start",
          "right",
          "top-end",
          "top-start",
          "top",
        ],
      },
    },
    importPath: "@mui/material",
  });
}
