import { ListItemAvatarProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const listItemAvatarMeta: CodeComponentMeta<ListItemAvatarProps> = {
   name: "ListItemAvatar",
   props: {
      children: "slot",
      sx: "object",
   },
   importPath: "@mui/material",
};
