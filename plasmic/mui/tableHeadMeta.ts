import { TableHeadProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const tableHeadMeta: CodeComponentMeta<TableHeadProps> = {
   name: "TableHead",
   props: {
      children: "slot",
      sx: "object",
   },
   importPath: "@mui/material",
};
