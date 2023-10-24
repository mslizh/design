import { Button, ListItem, ListItemButton, ListItemText, IconButton } from "@mui/material";
import { Checkbox } from "@/components/Checkbox";
import { Icon, IconProps } from "@/components/Icon";
import { Avatar } from "@/components/Avatar";
import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";
import { Chip, ViewListItemChips } from "./ViewListItemChips";
import { ViewListItemUsers } from "./ViewListItemUsers";

export type ViewListItemProps = {
   parentSize?: number;
   selectable?: boolean;
   removable?: boolean;
   icon?: ViewListItemIcon;
   avatar?: User;
   text: ViewListItemText;
   chips?: Chip[];
   save?: { url: string; label?: string };
   users?: User[];
   className?: string;
};

type ViewListItemIcon = Pick<IconProps, "title" | "variant" | "color">;

type ViewListItemText = {
   primary: string;
   secondary?: string;
   clip?: boolean;
};

export function ViewListItem({
   parentSize,
   selectable,
   removable,
   icon,
   avatar,
   text,
   chips,
   save,
   users,
   className,
}: ViewListItemProps) {
   return (
      <ListItem disablePadding className={className}>
         <ListItemButton>
            {selectable && <Checkbox edge="start" />}
            {icon && <Icon {...icon} />}
            {avatar && (
               <Avatar size="small" src={avatar.avatar}>
                  {avatar.firstName[0] + avatar.lastName[0]}
               </Avatar>
            )}
            {text && (
               <ListItemText
                  primary={text.primary}
                  primaryTypographyProps={{ noWrap: true }}
                  secondary={text.secondary}
                  secondaryTypographyProps={{ noWrap: text.clip }}
               />
            )}
            {chips && <ViewListItemChips chips={chips} parentWidth={parentSize} />}
            {save && (
               <Button
                  variant="outlined"
                  size="small"
                  color="secondary"
                  startIcon={<Icon title="ArrowDownload" variant="Regular" />}
                  sx={{ minWidth: "unset" }}
               >
                  {save.label ? save.label : "Скачать"}
               </Button>
            )}
            {users && <ViewListItemUsers users={users} />}
            {removable && (
               <IconButton size="small">
                  <Icon title="Dismiss" variant="Regular" />
               </IconButton>
            )}
         </ListItemButton>
      </ListItem>
   );
}

export const VIEW_LIST_ITEM_META: CodeComponentMeta<ViewListItemProps> = {
   name: "ViewListItem",
   props: {
      icon: {
         type: "object",
         fields: {
            title: "string",
            variant: {
               type: "choice",
               options: ["Regular", "Filled"],
            },
         },
      },
      text: {
         type: "object",
         fields: {
            primary: "string",
            secondary: "string",
         },
         defaultValue: {
            primary: "Some text...",
         },
      },
   },
   styleSections: ["visibility"],
};
