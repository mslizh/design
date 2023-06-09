import { ListItemProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const listItemMeta: CodeComponentMeta<ListItemProps> = {
   name: "ListItem",
   props: {
      children: "slot",
      secondaryAction: {
         type: "slot",
         hidePlaceholder: true,
      },
      divider: "boolean",
      disablePadding: "boolean",
      disableGutters: "boolean",
      dense: "boolean",
      alignItems: {
         type: "choice",
         options: ["center", "flex-start"],
      },
      sx: "object",
   },
   importPath: "@mui/material",
};
