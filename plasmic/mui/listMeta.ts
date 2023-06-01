import { ListProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const listMeta: CodeComponentMeta<ListProps> = {
   name: "List",
   props: {
      children: "slot",
      disablePadding: "boolean",
      dense: "boolean",
      showSubheader: "boolean",
      sx: "object",
   },
   importPath: "@mui/material",
};
