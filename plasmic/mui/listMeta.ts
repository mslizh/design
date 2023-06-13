import { ListProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const listMeta: CodeComponentMeta<ListProps> = {
   name: "List",
   props: {
      children: "slot",
      subheader: {
         type: "slot",
         hidePlaceholder: true,
      },
      disablePadding: "boolean",
      dense: "boolean",
      sx: "object",
   },
   importPath: "@mui/material",
};
