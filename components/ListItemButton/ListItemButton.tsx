import ListItemButton from "@mui/material/ListItemButton";
import { registerComponent } from "@plasmicapp/host";

export function registerListItemButton() {
  registerComponent(ListItemButton, {
    name: "ListItemButton",
    props: {
      children: "slot",
      alignItems: {
        type: "choice",
        options: ["center", "flex-start"],
      },
      autoFocus: "boolean",
      dense: "boolean",
      disabled: "boolean",
      disableGutters: "boolean",
      divider: "boolean",
      selected: "boolean",
      sx: "object",
    },
    importPath: "@mui/material",
  });
}
