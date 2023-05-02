import ListItemText from "@mui/material/ListItemText";
import { registerComponent } from "@plasmicapp/host";

export function registerListItemText() {
  registerComponent(ListItemText, {
    name: "ListItemText",
    props: {
      inset: "boolean",
      primary: {
        type: "string",
        defaultValue: "Some text…",
      },
      secondary: "string",
      sx: "object",
    },
    importPath: "@mui/material",
  });
}
