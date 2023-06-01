import { ListItemButtonProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const listItemButtonMeta: CodeComponentMeta<ListItemButtonProps> = {
   name: "ListItemButton",
   props: {
      children: "slot",
      alignItems: {
         type: "choice",
         options: ["center", "flex-start"],
      },
      autoFocus: "boolean",
      dense: "boolean",
      disabled: "boolean",
      disableGutters: "boolean",
      divider: "boolean",
      selected: "boolean",
      sx: "object",
      onClick: {
         type: "eventHandler",
         argTypes: [],
      },
   },
   importPath: "@mui/material",
};
