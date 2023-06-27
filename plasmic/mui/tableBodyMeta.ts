import { TableBodyProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const tableBodyMeta: CodeComponentMeta<TableBodyProps> = {
   name: "TableBody",
   props: {
      children: "slot",
      sx: "object",
   },
   importPath: "@mui/material",
};
