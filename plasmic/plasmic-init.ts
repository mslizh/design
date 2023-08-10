import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
// import { PaletteOptions, Theme } from "@mui/material/styles";
// import { theme } from "@/styles/theme";
// import { get } from "lodash";

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
   Checkbox,
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
import {
   APP_BAR_META,
   AVATAR_GROUP_META,
   AVATAR_META,
   BADGE_META,
   BOX_META,
   BUTTON_GROUP_META,
   BUTTON_META,
   CARD_ACTIONS_META,
   CARD_ACTION_AREA_META,
   CARD_CONTENT_META,
   CARD_HEADER_META,
   CARD_MEDIA_META,
   CARD_META,
   CHECKBOX_META,
   CHIP_META,
   CIRCULAR_PROGRESS_META,
   CONTAINER_META,
   DIALOG_ACTIONS_META,
   DIALOG_CONTENT_META,
   DIALOG_CONTENT_TEXT_META,
   DIALOG_META,
   DIALOG_TITLE_META,
   DIVIDER_META,
   DRAWER_META,
   FORM_CONTROL_LABEL_META,
   FORM_CONTROL_META,
   FORM_GROUP,
   FORM_HELPER_TEXT_META,
   FORM_LABEL_META,
   GRID_META,
   ICON_BUTTON_META,
   ICON_META,
   INPUT_ADORNMENT_META,
   INPUT_BASE_META,
   LINEAR_PROGRESS_META,
   LIST_ITEM_AVATAR_META,
   LIST_ITEM_BUTTON_META,
   LIST_ITEM_ICON_META,
   LIST_ITEM_META,
   LIST_ITEM_TEXT_META,
   LIST_META,
   LIST_SUBHEADER_META,
   MENU_ITEM_META,
   OUTLINED_INPUT_META,
   PAPER_META,
   SKELETON_META,
   STACK_META,
   TABLE_BODY_META,
   TABLE_CELL_META,
   TABLE_CONTAINER_META,
   TABLE_FOOTER_META,
   TABLE_HEAD_META,
   TABLE_META,
   TABLE_ROW_META,
   TEXT_FIELD_META,
   TOGGLE_BUTTON_GROUP_META,
   TOGGLE_BUTTON_META,
   TOOLBAR_META,
   TOOLTIP_META,
   TYPOGRAPHY_META,
} from "./muiMeta";

import {
   Avatar,
   AvatarGroup,
   Empty,
   FileCard,
   FileGrid,
   FileList,
   Icon,
   WithToast,
} from "@/components";
import {
   EMPTY_META,
   FILE_CARD_META,
   FILE_GRID_META,
   FILE_LIST_META,
   WITH_TOAST_META,
} from "./customMeta";

export const PLASMIC = initPlasmicLoader({
   projects: [
      {
         id: "iNbmMeuP7MrS8ZVPKD5qsS",
         token: "mwVtlqyExNnXNZqoTqYA1YmYDWLLGdkXflAvGsPWXAEbRVZF9PESWuw5e6NQ05T42x5LEqGKDv9AcEgg",
      },
      {
         id: "ot2HEJTxLo6XRXUb4cEaih",
         token: "FMVljStPZEWN8EQwATO9SkedxkqsiWOdEKDmCezTTB1zfi9CV44SJwhXw5Sek6lAVbe1jvugVIGYh7LQxA",
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

PLASMIC.registerComponent(WithToast, WITH_TOAST_META);

PLASMIC.registerComponent(Empty, EMPTY_META);
PLASMIC.registerComponent(FileCard, FILE_CARD_META);
PLASMIC.registerComponent(FileGrid, FILE_GRID_META);
PLASMIC.registerComponent(FileList, FILE_LIST_META);

// function registerTokens(theme: Theme) {
//    const palette = theme.palette;
//    Object.keys(palette).map((key) => {
//       registerTokenFromPalette(palette, key);
//    });
// }

// function registerTokenFromPalette(palette: PaletteOptions, key: string) {
//    const token = get(palette, key); // Object or string

//    if (token !== undefined && key !== "mode") {
//       if (typeof token === "string") {
//          PLASMIC.registerToken({
//             name: `${key}`,
//             displayName: `${key}`,
//             value: token,
//             type: "color",
//          });
//       }

//       if (typeof token === "object") {
//          Object.keys(token).map((value) => {
//             if (typeof token[value] === "string") {
//                PLASMIC.registerToken({
//                   name: `${key}.${value}`,
//                   displayName: `${key}.${value}`,
//                   value: token[value],
//                   type: "color",
//                });
//             }

//             if (typeof token[value] === "number") {
//                PLASMIC.registerToken({
//                   name: `${value}`,
//                   displayName: `${value}`,
//                   value: `${token[value] * 100}%`,
//                   type: "opacity",
//                });
//             }
//          });
//       }
//    }
// }

// registerTokens(theme);
