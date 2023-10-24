import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import {
   AppBar,
   Badge,
   BottomNavigation,
   BottomNavigationAction,
   Box,
   Button,
   ButtonGroup,
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
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   Divider,
   Drawer,
   FormControl,
   FormControlLabel,
   FormGroup,
   FormHelperText,
   FormLabel,
   Grid,
   IconButton,
   InputAdornment,
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
   Paper,
   Skeleton,
   Stack,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableFooter,
   TableHead,
   TableRow,
   TextField,
   ToggleButton,
   ToggleButtonGroup,
   Toolbar,
   Tooltip,
   Typography,
} from "@mui/material";

import { APP_BAR_META } from "@/components/AppBar";
import { AVATAR_GROUP_META, AVATAR_META, Avatar, AvatarGroup } from "@/components/Avatar";
import { BADGE_META } from "@/components/Badge";
import {
   BOTTOM_NAVIGATION_ACTION_META,
   BOTTOM_NAVIGATION_META,
} from "@/components/BottomNavigation";
import { BOX_META } from "@/components/Box";
import { BUTTON_GROUP_META } from "@/components/ButtonGroup";
import { BUTTON_META } from "@/components/Button";
import {
   CARD_ACTIONS_META,
   CARD_ACTION_AREA_META,
   CARD_CONTENT_META,
   CARD_HEADER_META,
   CARD_MEDIA_META,
   CARD_META,
} from "@/components/Card";
import { EMPTY_META, Empty } from "@/components/Empty";
import { ICON_META, Icon } from "@/components/Icon";
import { WITH_TOAST_META, WithToast } from "@/components/Toaster";
import { CHECKBOX_META } from "@/components/Checkbox";
import { CHIP_META } from "@/components/Chip";
import { CIRCULAR_PROGRESS_META, LINEAR_PROGRESS_META } from "@/components/Progress";
import { CONTAINER_META } from "@/components/Container";
import {
   DIALOG_ACTIONS_META,
   DIALOG_CONTENT_META,
   DIALOG_CONTENT_TEXT_META,
   DIALOG_META,
   DIALOG_TITLE_META,
   DialogTitle,
} from "@/components/Dialog";
import { DIVIDER_META } from "@/components/Divider";
import { DRAWER_META } from "@/components/Drawer";
import {
   FORM_CONTROL_LABEL_META,
   FORM_CONTROL_META,
   FORM_GROUP,
   FORM_HELPER_TEXT_META,
   FORM_LABEL_META,
} from "@/components/Form";
import { GRID_META } from "@/components/Grid";
import {
   FILE_CARD_META,
   FILE_GRID_META,
   FILE_LIST_META,
   FileCard,
   FileGrid,
   FileList,
} from "@/components/File";
import { ICON_BUTTON_META } from "@/components/IconButton";
import { INPUT_ADORNMENT_META, INPUT_BASE_META, OUTLINED_INPUT_META } from "@/components/Input";
import {
   LIST_ITEM_AVATAR_META,
   LIST_ITEM_BUTTON_META,
   LIST_ITEM_ICON_META,
   LIST_ITEM_META,
   LIST_ITEM_TEXT_META,
   LIST_META,
   LIST_SUBHEADER_META,
} from "@/components/List";
import { MENU_ITEM_META } from "@/components/Menu";
import { PAPER_META } from "@/components/Paper";
import { SKELETON_META } from "@/components/Skeleton";
import { STACK_META } from "@/components/Stack";
import {
   TABLE_BODY_META,
   TABLE_CELL_META,
   TABLE_CONTAINER_META,
   TABLE_FOOTER_META,
   TABLE_HEAD_META,
   TABLE_META,
   TABLE_ROW_META,
} from "@/components/Table";
import { TEXT_FIELD_META } from "@/components/TextField";
import { TOGGLE_BUTTON_GROUP_META, TOGGLE_BUTTON_META } from "@/components/ToggleButton";
import { TOOLBAR_META } from "@/components/Toolbar";
import { TOOLTIP_META } from "@/components/Tooltip";
import { TYPOGRAPHY_META } from "@/components/Typography";
import { VIEW_LIST_ITEM_META, ViewListItem } from "@/views/list";

export const PLASMIC = initPlasmicLoader({
   projects: [
      {
         id: process.env.PROJECT_ID as string,
         token: process.env.PROJECT_TOKEN as string,
      },
   ],
   // Fetches the latest revisions, whether or not they were unpublished!
   // Disable for production to ensure you render only published changes.
   preview: true,
});

PLASMIC.registerComponent(AppBar, APP_BAR_META);
PLASMIC.registerComponent(AvatarGroup, AVATAR_GROUP_META);
PLASMIC.registerComponent(Avatar, AVATAR_META);
PLASMIC.registerComponent(Badge, BADGE_META);
PLASMIC.registerComponent(BottomNavigation, BOTTOM_NAVIGATION_META);
PLASMIC.registerComponent(BottomNavigationAction, BOTTOM_NAVIGATION_ACTION_META);
PLASMIC.registerComponent(Box, BOX_META);
PLASMIC.registerComponent(ButtonGroup, BUTTON_GROUP_META);
PLASMIC.registerComponent(Button, BUTTON_META);
PLASMIC.registerComponent(CardActionArea, CARD_ACTION_AREA_META);
PLASMIC.registerComponent(CardActions, CARD_ACTIONS_META);
PLASMIC.registerComponent(CardContent, CARD_CONTENT_META);
PLASMIC.registerComponent(CardHeader, CARD_HEADER_META);
PLASMIC.registerComponent(CardMedia, CARD_MEDIA_META);
PLASMIC.registerComponent(Card, CARD_META);
PLASMIC.registerComponent(Checkbox, CHECKBOX_META);
PLASMIC.registerComponent(Chip, CHIP_META);
PLASMIC.registerComponent(CircularProgress, CIRCULAR_PROGRESS_META);
PLASMIC.registerComponent(Container, CONTAINER_META);
PLASMIC.registerComponent(DialogActions, DIALOG_ACTIONS_META);
PLASMIC.registerComponent(DialogContent, DIALOG_CONTENT_META);
PLASMIC.registerComponent(DialogContentText, DIALOG_CONTENT_TEXT_META);
PLASMIC.registerComponent(Dialog, DIALOG_META);
PLASMIC.registerComponent(DialogTitle, DIALOG_TITLE_META);
PLASMIC.registerComponent(Divider, DIVIDER_META);
PLASMIC.registerComponent(Drawer, DRAWER_META);
PLASMIC.registerComponent(Empty, EMPTY_META);
PLASMIC.registerComponent(FileCard, FILE_CARD_META);
PLASMIC.registerComponent(FileGrid, FILE_GRID_META);
PLASMIC.registerComponent(FileList, FILE_LIST_META);
PLASMIC.registerComponent(FormControlLabel, FORM_CONTROL_LABEL_META);
PLASMIC.registerComponent(FormControl, FORM_CONTROL_META);
PLASMIC.registerComponent(FormGroup, FORM_GROUP);
PLASMIC.registerComponent(FormHelperText, FORM_HELPER_TEXT_META);
PLASMIC.registerComponent(FormLabel, FORM_LABEL_META);
PLASMIC.registerComponent(Grid, GRID_META);
PLASMIC.registerComponent(IconButton, ICON_BUTTON_META);
PLASMIC.registerComponent(Icon, ICON_META);
PLASMIC.registerComponent(InputAdornment, INPUT_ADORNMENT_META);
PLASMIC.registerComponent(InputBase, INPUT_BASE_META);
PLASMIC.registerComponent(LinearProgress, LINEAR_PROGRESS_META);
PLASMIC.registerComponent(ListItemAvatar, LIST_ITEM_AVATAR_META);
PLASMIC.registerComponent(ListItemButton, LIST_ITEM_BUTTON_META);
PLASMIC.registerComponent(ListItemIcon, LIST_ITEM_ICON_META);
PLASMIC.registerComponent(ListItem, LIST_ITEM_META);
PLASMIC.registerComponent(ListItemText, LIST_ITEM_TEXT_META);
PLASMIC.registerComponent(List, LIST_META);
PLASMIC.registerComponent(ListSubheader, LIST_SUBHEADER_META);
PLASMIC.registerComponent(MenuItem, MENU_ITEM_META);
PLASMIC.registerComponent(OutlinedInput, OUTLINED_INPUT_META);
PLASMIC.registerComponent(Paper, PAPER_META);
PLASMIC.registerComponent(Skeleton, SKELETON_META);
PLASMIC.registerComponent(Stack, STACK_META);
PLASMIC.registerComponent(TableBody, TABLE_BODY_META);
PLASMIC.registerComponent(TableCell, TABLE_CELL_META);
PLASMIC.registerComponent(TableContainer, TABLE_CONTAINER_META);
PLASMIC.registerComponent(TableFooter, TABLE_FOOTER_META);
PLASMIC.registerComponent(TableHead, TABLE_HEAD_META);
PLASMIC.registerComponent(Table, TABLE_META);
PLASMIC.registerComponent(TableRow, TABLE_ROW_META);
PLASMIC.registerComponent(TextField, TEXT_FIELD_META);
PLASMIC.registerComponent(ToggleButton, TOGGLE_BUTTON_META);
PLASMIC.registerComponent(ToggleButtonGroup, TOGGLE_BUTTON_GROUP_META);
PLASMIC.registerComponent(Toolbar, TOOLBAR_META);
PLASMIC.registerComponent(Tooltip, TOOLTIP_META);
PLASMIC.registerComponent(Typography, TYPOGRAPHY_META);
PLASMIC.registerComponent(ViewListItem, VIEW_LIST_ITEM_META);
PLASMIC.registerComponent(WithToast, WITH_TOAST_META);
