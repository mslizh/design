import { ListSubheaderProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const listSubheaderMeta: CodeComponentMeta<ListSubheaderProps> = {
   name: "ListSubheader",
   props: {
      children: "slot",
      color: {
         type: "choice",
         options: ["default", "inherit", "primary"],
      },
      disableGutters: "boolean",
      disableSticky: "boolean",
      inset: "boolean",
      sx: "object",
   },
   importPath: "@mui/material",
};
