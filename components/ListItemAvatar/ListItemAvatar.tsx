import ListItemAvatar from "@mui/material/ListItemAvatar";
import { registerComponent } from "@plasmicapp/host";

export function registerListItemAvatar() {
  registerComponent(ListItemAvatar, {
    name: "ListItemAvatar",
    props: {
      children: "slot",
      sx: "object",
    },
    importPath: "@mui/material",
  });
}
