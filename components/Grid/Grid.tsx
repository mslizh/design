import { Grid } from "@mui/material";
import { registerComponent } from "@plasmicapp/host";

export function registerGrid(styleProps: any) {
  registerComponent(Grid, {
    name: "Grid",
    props: {
      children: "slot",
      container: "boolean",
      item: "boolean",
      columns: {
        type: "number",
        hidden: (props) => !props.container,
      },
      xs: {
        type: "number",
        hidden: (props) => !props.item,
      },
      sm: {
        type: "number",
        hidden: (props) => !props.item,
      },
      md: {
        type: "number",
        hidden: (props) => !props.item,
      },
      lg: {
        type: "number",
        hidden: (props) => !props.item,
      },
      xl: {
        type: "number",
        hidden: (props) => !props.item,
      },
      spacing: {
        type: "number",
        hidden: (props) => !props.container,
      },
      rowSpacing: {
        type: "number",
        hidden: (props) => !props.container,
      },
      columnSpacing: {
        type: "number",
        hidden: (props) => !props.container,
      },
      direction: {
        type: "choice",
        options: ["column-reverse", "column", "row-reverse", "row"],
        hidden: (props) => !props.container,
      },
      ...styleProps,
    },
    importPath: "@mui/material",
  });
}
