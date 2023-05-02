import Drawer from "@mui/material/Drawer";
import { registerComponent } from "@plasmicapp/host";

export function registerDrawer() {
  registerComponent(Drawer, {
    name: "Drawer",
    props: {
      children: "slot",
      anchor: {
        type: "choice",
        options: ["bottom", "left", "right", "top"],
      },
      elevation: "number",
      hideBackdrop: "boolean",
      open: "boolean",
      variant: {
        type: "choice",
        options: ["permanent", "persistent", "temporary"],
      },
    },
    importPath: "@mui/material",
  });
}
