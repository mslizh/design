import { MenuItemProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";

export const MENU_ITEM_META: CodeComponentMeta<MenuItemProps> = {
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
   styleSections: ["visibility"],
};
