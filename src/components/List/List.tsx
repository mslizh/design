import {
   ListItemAvatarProps,
   ListItemButtonProps,
   ListItemIconProps,
   ListItemProps,
   ListItemTextProps,
   ListProps,
   ListSubheaderProps,
} from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";

export const LIST_ITEM_AVATAR_META: CodeComponentMeta<ListItemAvatarProps> = {
   name: "ListItemAvatar",
   props: {
      children: "slot",
      sx: "object",
   },
   parentComponentName: "ListItem",
   styleSections: ["visibility"],
};

export const LIST_ITEM_BUTTON_META: CodeComponentMeta<ListItemButtonProps> = {
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
   parentComponentName: "ListItem",
   styleSections: ["visibility"],
};

export const LIST_ITEM_ICON_META: CodeComponentMeta<ListItemIconProps> = {
   name: "ListItemIcon",
   props: {
      children: "slot",
      sx: "object",
   },
   parentComponentName: "ListItem",
   styleSections: ["visibility"],
};

export const LIST_ITEM_META: CodeComponentMeta<ListItemProps> = {
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
   parentComponentName: "List",
   styleSections: ["visibility"],
};

export const LIST_ITEM_TEXT_META: CodeComponentMeta<ListItemTextProps> = {
   name: "ListItemText",
   props: {
      inset: "boolean",
      primary: {
         type: "string",
         defaultValue: "Some text…",
      },
      secondary: "string",
      sx: "object",
   },
   parentComponentName: "ListItem",
   styleSections: ["visibility"],
};

export const LIST_META: CodeComponentMeta<ListProps> = {
   name: "List",
   props: {
      children: "slot",
      subheader: {
         type: "slot",
         hidePlaceholder: true,
      },
      disablePadding: "boolean",
      dense: "boolean",
      sx: "object",
   },
   styleSections: ["visibility"],
};

export const LIST_SUBHEADER_META: CodeComponentMeta<ListSubheaderProps> = {
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
   parentComponentName: "List",
   styleSections: ["visibility"],
};
