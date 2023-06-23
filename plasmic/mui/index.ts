import { registerComponent } from "@plasmicapp/host";

import { Avatar } from "@/components/Avatar";
import { AvatarGroup } from "@/components/AvatarGroup";
import { Icon } from "@/components/Icon";
import {
   AppBar,
   Badge,
   Box,
   Button,
   ButtonGroup,
   Card,
   CardActionArea,
   CardActions,
   CardContent,
   CardHeader,
   CardMedia,
   Chip,
   CircularProgress,
   Container,
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   DialogTitle,
   Divider,
   Drawer,
   FormControl,
   FormControlLabel,
   FormGroup,
   FormHelperText,
   FormLabel,
   Grid,
   IconButton,
   InputBase,
   LinearProgress,
   List,
   ListItem,
   ListItemAvatar,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   ListSubheader,
   MenuItem,
   OutlinedInput,
   Skeleton,
   TextField,
   Typography,
} from "@mui/material";

import { Checkbox } from "@/components/Checkbox";
import { appBarMeta } from "./appBarMeta";
import { avatarGroupMeta } from "./avatarGroupMeta";
import { avatarMeta } from "./avatarMeta";
import { badgeMeta } from "./badgeMeta";
import { boxMeta } from "./boxMeta";
import { buttonGroupMeta } from "./buttonGroupMeta";
import { buttonMeta } from "./buttonMeta";
import { cardActionAreaMeta } from "./cardActionAreaMeta";
import { cardActionsMeta } from "./cardActionsMeta";
import { cardContentMeta } from "./cardContentMeta";
import { cardHeaderMeta } from "./cardHeaderMeta";
import { cardMediaMeta } from "./cardMediaMeta";
import { cardMeta } from "./cardMeta";
import { checkboxMeta } from "./checkboxMeta";
import { chipMeta } from "./chipMeta";
import { circularProgressMeta } from "./circularProgressMeta";
import { containerMeta } from "./containerMeta";
import { dialogActionsMeta } from "./dialogActionsMeta";
import { dialogContentMeta } from "./dialogContentMeta";
import { dialogContentTextMeta } from "./dialogContentTextMeta";
import { dialogMeta } from "./dialogMeta";
import { dialogTitleMeta } from "./dialogTitleMeta";
import { dividerMeta } from "./dividerMeta";
import { drawerMeta } from "./drawerMeta";
import { formControlLabelMeta } from "./formControlLabelMeta";
import { formControlMeta } from "./formControlMeta";
import { formGroupMeta } from "./formGroupMeta";
import { formHelperTextMeta } from "./formHelperTextMeta";
import { formLabelMeta } from "./formLabelMeta";
import { gridMeta } from "./gridMeta";
import { iconButtonMeta } from "./iconButtonMeta";
import { iconMeta } from "./iconMeta";
import { inputBaseMeta } from "./inputBaseMeta";
import { linearProgressMeta } from "./linearProgressMeta";
import { listItemAvatarMeta } from "./listItemAvatarMeta";
import { listItemButtonMeta } from "./listItemButtonMeta";
import { listItemIconMeta } from "./listItemIconMeta";
import { listItemMeta } from "./listItemMeta";
import { listItemTextMeta } from "./listItemTextMeta";
import { listMeta } from "./listMeta";
import { listSubheaderMeta } from "./listSubheaderMeta";
import { menuItemMeta } from "./menuItem";
import { outlinedInputMeta } from "./outlinedInputMeta";
import { skeletonMeta } from "./skeletonMeta";
import { textFieldMeta } from "./textFieldMeta";
import { typographyMeta } from "./typographyMeta";

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
   registerComponent(Dialog, dialogMeta);
   registerComponent(DialogActions, dialogActionsMeta);
   registerComponent(DialogContent, dialogContentMeta);
   registerComponent(DialogContentText, dialogContentTextMeta);
   registerComponent(DialogTitle, dialogTitleMeta);
   registerComponent(Drawer, drawerMeta);
   registerComponent(FormControl, formControlMeta);
   registerComponent(FormControlLabel, formControlLabelMeta);
   registerComponent(FormGroup, formGroupMeta);
   registerComponent(FormHelperText, formHelperTextMeta);
   registerComponent(FormLabel, formLabelMeta);
   registerComponent(Grid, gridMeta);
   registerComponent(Icon, iconMeta);
   registerComponent(IconButton, iconButtonMeta);
   registerComponent(InputBase, inputBaseMeta);
   registerComponent(LinearProgress, linearProgressMeta);
   registerComponent(List, listMeta);
   registerComponent(ListItem, listItemMeta);
   registerComponent(ListItemAvatar, listItemAvatarMeta);
   registerComponent(ListItemButton, listItemButtonMeta);
   registerComponent(ListItemIcon, listItemIconMeta);
   registerComponent(ListItemText, listItemTextMeta);
   registerComponent(ListSubheader, listSubheaderMeta);
   registerComponent(MenuItem, menuItemMeta);
   registerComponent(OutlinedInput, outlinedInputMeta);
   registerComponent(Skeleton, skeletonMeta);
   registerComponent(TextField, textFieldMeta);
   registerComponent(Typography, typographyMeta);
}
