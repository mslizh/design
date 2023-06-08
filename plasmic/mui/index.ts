import {
   AppBar,
   Avatar,
   AvatarGroup,
   Badge,
   Box,
   Button,
   ButtonGroup,
   Divider,
   Card,
   CardActionArea,
   CardActions,
   CardContent,
   CardHeader,
   CardMedia,
   Checkbox,
   Chip,
   CircularProgress,
   Container,
   Drawer,
   Grid,
   LinearProgress,
   List,
   ListItem,
   ListItemAvatar,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   ListSubheader,
} from "@mui/material";
import { registerComponent } from "@plasmicapp/host";
import { appBarMeta } from "./appBarMeta";
import { avatarMeta } from "./avatarMeta";
import { avatarGroupMeta } from "./avatarGroupMeta";
import { badgeMeta } from "./badgeMeta";
import { boxMeta } from "./boxMeta";
import { buttonMeta } from "./buttonMeta";
import { buttonGroupMeta } from "./buttonGroupMeta";
import { dividerMeta } from "./dividerMeta";
import { cardMeta } from "./cardMeta";
import { cardActionAreaMeta } from "./cardActionAreaMeta";
import { cardActionsMeta } from "./cardActionsMeta";
import { cardContentMeta } from "./cardContentMeta";
import { cardHeaderMeta } from "./cardHeaderMeta";
import { cardMediaMeta } from "./cardMediaMeta";
import { checkboxMeta } from "./checkboxMeta";
import { chipMeta } from "./chipMeta";
import { circularProgressMeta } from "./circularProgressMeta";
import { containerMeta } from "./containerMeta";
import { drawerMeta } from "./drawerMeta";
import { gridMeta } from "./gridMeta";
import { Icon } from "@/components/Icon";
import { iconMeta } from "./iconMeta";
import { linearProgressMeta } from "./linearProgressMeta";
import { listMeta } from "./listMeta";
import { listItemMeta } from "./listItemMeta";
import { listItemAvatarMeta } from "./listItemAvatarMeta";
import { listItemButtonMeta } from "./listItemButtonMeta";
import { listItemIconMeta } from "./listItemIconMeta";
import { listItemTextMeta } from "./listItemTextMeta";
import { listSubheaderMeta } from "./listSubheaderMeta";


export function registerMuiComponents() {
   registerComponent(AppBar, appBarMeta);
   registerComponent(Avatar, avatarMeta);
   registerComponent(AvatarGroup, avatarGroupMeta);
   registerComponent(Badge, badgeMeta);
   registerComponent(Box, boxMeta); 
   registerComponent(Button, buttonMeta);
   registerComponent(ButtonGroup, buttonGroupMeta);
   registerComponent(Divider, dividerMeta);
   registerComponent(CardActionArea, cardActionAreaMeta);
   registerComponent(CardActions, cardActionsMeta);
   registerComponent(CardContent, cardContentMeta);
   registerComponent(CardHeader, cardHeaderMeta);
   registerComponent(CardMedia, cardMediaMeta);
   registerComponent(Card, cardMeta);
   registerComponent(Checkbox, checkboxMeta);
   registerComponent(Chip, chipMeta);
   registerComponent(CircularProgress, circularProgressMeta);
   registerComponent(Container, containerMeta);
   registerComponent(Drawer, drawerMeta);
   registerComponent(Grid, gridMeta);
   registerComponent(LinearProgress, linearProgressMeta);
   registerComponent(List, listMeta);
   registerComponent(ListItem, listItemMeta);
   registerComponent(ListItemAvatar, listItemAvatarMeta);
   registerComponent(ListItemButton, listItemButtonMeta);
   registerComponent(ListItemIcon, listItemIconMeta);
   registerComponent(ListItemText, listItemTextMeta);
   registerComponent(ListSubheader, listSubheaderMeta);
   registerComponent(Icon, iconMeta);
}
