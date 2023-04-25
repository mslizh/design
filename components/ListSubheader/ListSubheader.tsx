import { registerComponent } from "@plasmicapp/host";
import ListSubheader from "@mui/material/ListSubheader";

export function registerListSubheader() {
  registerComponent(ListSubheader, {
    name: "ListSubheader",
    props: {
      children: "string",
      color: "string",
      disableGutters: "boolean",
      disableSticky: "boolean",
      inset: "boolean",
      sx: "object",
    },
    importPath: "@mui/material",
  });
}
