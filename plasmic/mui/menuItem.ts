import { MenuItemProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const menuItemMeta: CodeComponentMeta<MenuItemProps> = {
   name: "MenuItem",
   props: {
      autoFocus: "boolean",
      children: "slot",
      dense: "boolean",
      disableGutters: "boolean",
      divider: "boolean",
      selected: "boolean",
      sx: "object",
      value: "string",
   },
   importPath: "@mui/material",
};
