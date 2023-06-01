import { ListSubheaderProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const listSubheaderMeta: CodeComponentMeta<ListSubheaderProps> = {
   name: "ListSubheader",
   props: {
      children: "string",
      color: "string",
      disableGutters: "boolean",
      disableSticky: "boolean",
      inset: "boolean",
      sx: "object",
   },
   importPath: "@mui/material",
};
