import Grid from "@mui/material/Grid";
import { registerComponent } from "@plasmicapp/host";

export function registerGrid() {
  registerComponent(Grid, {
    name: "Grid",
    props: {
      children: "slot",
      container: "boolean",
      item: "boolean",
      columns: {
        type: "object",
        hidden: (props) => !props.container,
      },
      spacing: {
        type: "number",
        hidden: (props) => !props.container,
      },
      columnSpacing: {
        type: "number",
        hidden: (props) => !props.container,
      },
      rowSpacing: {
        type: "number",
        hidden: (props) => !props.container,
      },
      xs: "number",
      sm: "number",
      md: "number",
      lg: "number",
      xl: "number",
      sx: "object",
    },
    importPath: "@mui/material",
  });
}
