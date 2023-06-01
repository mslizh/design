import { ListItemIconProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const listItemIconMeta: CodeComponentMeta<ListItemIconProps> = {
   name: "ListItemIcon",
   props: {
      children: "slot",
      sx: "object",
   },
   importPath: "@mui/material",
};
