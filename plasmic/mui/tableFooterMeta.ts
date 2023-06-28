import { TableFooterProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const tableFooterMeta: CodeComponentMeta<TableFooterProps> = {
   name: "TableFooter",
   props: {
      children: "slot",
      sx: "object",
   },
   importPath: "@mui/material",
};
