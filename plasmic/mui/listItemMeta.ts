import { ListItemProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const listItemMeta: CodeComponentMeta<ListItemProps> = {
   name: "ListItem",
   props: {
      children: "slot",
      disablePadding: "boolean",
   },
   importPath: "@mui/material",
};
