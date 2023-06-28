import { TableRowProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const tableRowMeta: CodeComponentMeta<TableRowProps> = {
   name: "TableRow",
   props: {
      children: "slot",
      hover: "boolean",
      selected: "boolean",
      sx: "object",
   },
   importPath: "@mui/material",
};
