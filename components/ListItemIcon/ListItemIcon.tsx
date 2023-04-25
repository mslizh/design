import ListItemIcon from "@mui/material/ListItemIcon";
import { registerComponent } from "@plasmicapp/host";

export function registerListItemIcon() {
  registerComponent(ListItemIcon, {
    name: "ListItemIcon",
    props: {
      children: "slot",
      sx: "object",
    },
    importPath: "@mui/material",
  });
}
