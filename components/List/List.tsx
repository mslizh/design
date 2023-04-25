import List from "@mui/material/List";
import { registerComponent } from "@plasmicapp/host";

export function registerList() {
  registerComponent(List, {
    name: "List",
    props: {
      children: "slot",
      disablePadding: "boolean",
      dense: "boolean",
      subheader: "slot",
      sx: "object",
    },
    importPath: "@mui/material",
  });
}
