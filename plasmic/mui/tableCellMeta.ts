import { TableCellProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const tableCellMeta: CodeComponentMeta<TableCellProps> = {
   name: "TableCell",
   props: {
      align: {
         type: "choice",
         options: ["inherit", "center", "justify", "left", "right"],
      },
      children: "slot",
      padding: {
         type: "choice",
         options: ["checkbox", "none", "normal"],
      },
      size: {
         type: "choice",
         options: ["medium", "small"],
      },
      sortDirection: {
         type: "choice",
         options: ["asc", "desc"],
      },
      sx: "object",
      variant: {
         type: "choice",
         options: ["body", "footer", "head"],
      },
   },
   importPath: "@mui/material",
};
