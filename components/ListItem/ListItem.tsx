import ListItem from "@mui/material/ListItem";
import { registerComponent } from "@plasmicapp/host";

export function registerListItem() {
  registerComponent(ListItem, {
    name: "ListItem",
    props: {
      children: "slot",
      disablePadding: "boolean",
    },
    importPath: "@mui/material",
  });
}
