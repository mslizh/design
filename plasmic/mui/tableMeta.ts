import { TableProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const tableMeta: CodeComponentMeta<TableProps> = {
   name: "Table",
   props: {
      children: "slot",
      padding: {
         type: "choice",
         options: ["checkbox", "none", "normal"],
      },
      size: {
         type: "choice",
         options: ["medium", "small"],
      },
      stickyHeader: "boolean",
      sx: "object",
   },
   importPath: "@mui/material",
};
