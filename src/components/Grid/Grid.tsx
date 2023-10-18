import { GridProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";

export const GRID_META: CodeComponentMeta<GridProps> = {
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
      sx: "object",
   },
   styleSections: ["visibility"],
};
