import { ListItemProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const listItemMeta: CodeComponentMeta<ListItemProps> = {
   name: "ListItem",
   props: {
      children: "slot",
      disableGutters: "boolean",
      disablePadding: "boolean",
      divider: "boolean",
      secondaryAction: {
         type: "slot",
         hidePlaceholder: true,
      },
      dense: "boolean",
      alignItems: {
         type: "choice",
         options: ["center", "flex-start"],
      },
      sx: "object",
   },
   importPath: "@mui/material",
};
