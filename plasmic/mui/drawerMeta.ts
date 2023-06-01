import { CodeComponentMeta } from "@plasmicapp/host";
import { DrawerProps } from "@mui/material";

export const drawerMeta: CodeComponentMeta<DrawerProps> = {
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
    sx: "object",
  },
  importPath: "@mui/material",
};
