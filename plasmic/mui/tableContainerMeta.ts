import { TableContainerProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const tableContainerMeta: CodeComponentMeta<TableContainerProps> = {
   name: "TableContainer",
   props: {
      children: "slot",
      sx: "object",
   },
   importPath: "@mui/material",
};
