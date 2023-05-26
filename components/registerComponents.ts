import { registerBadge } from "./Badge";
import { registerBox } from "./Box";
import { registerButton } from "./Button";
import { registerButtonGroup } from "./ButtonGroup";
import { registerCard } from "./Card";
import { registerCardActionArea } from "./CardActionArea";
import { registerCardActions } from "./CardActions";
import { registerCardContent } from "./CardContent";
import { registerCardHeader } from "./CardHeader";
import { registerCardMedia } from "./CardMedia";
import { registerCheckbox } from "./Checkbox";
import { registerContainer } from "./Container";
import { registerDivider } from "./Divider";
import { registerDrawer } from "./Drawer";
import { registerFileUploader } from "./FileUploader";
import { registerFileCard } from "./FileCard";
import { registerFileGrid } from "./FileGrid";
import { registerFileList } from "./FileList";
import { registerFileListItem } from "./FileListItem";
import { registerGrid } from "./Grid";
import { registerIcon } from "./Icon";
import { registerIconButton } from "./IconButton";
import { registerInputAdornment } from "./InputAdornment";
import { registerInputBase } from "./InputBase";
import { registerList } from "./List";
import { registerListItem } from "./ListItem";
import { registerListItemAvatar } from "./ListItemAvatar";
import { registerListItemButton } from "./ListItemButton";
import { registerListItemIcon } from "./ListItemIcon";
import { registerListItemText } from "./ListItemText";
import { registerOutlinedInput } from "./OutlinedInput";
import { registerPaper } from "./Paper";
import { registerScheduler } from "./Scheduler";
import { registerStack } from "./Stack";
import { registerTypography } from "./Typography";
import { registerToggleButton } from "./ToggleButton";
import { registerToggleButtonGroup } from "./ToggleButtonGroup";
import { registerUpload } from "./Upload";
import { registerWithToast } from "./Toaster";
import { registerTooltip } from "./Tooltip";
import { registerAppBar } from "./AppBar";
import { registerToolbar } from "./Toolbar";

export function registerComponents() {
  registerAppBar(styleProps);
  registerBadge();
  registerBox(styleProps);
  registerButton();
  registerButtonGroup();
  registerCard();
  registerCardActionArea();
  registerCardActions();
  registerCardContent();
  registerCardHeader();
  registerCardMedia();
  registerCheckbox();
  registerContainer(styleProps);
  registerDivider();
  registerDrawer();
  registerFileCard();
  registerFileGrid();
  registerFileList();
  registerFileListItem();
  registerFileUploader();
  registerGrid(styleProps);
  registerIcon();
  registerInputAdornment();
  registerIconButton();
  registerInputBase();
  registerList();
  registerListItem();
  registerListItemAvatar();
  registerListItemButton();
  registerListItemIcon();
  registerListItemText();
  registerOutlinedInput();
  registerPaper(styleProps);
  registerScheduler();
  registerStack(styleProps);
  registerToggleButton();
  registerToggleButtonGroup();
  registerToolbar(styleProps);
  registerTooltip();
  registerTypography(styleProps);
  registerUpload();
  registerWithToast();
}

const styleNumberProp = {
  type: "number",
  advanced: true,
};

export const styleProps = {
  alignItems: {
    type: "choice",
    options: ["flex-start", "flex-end", "center", "baseline", "stretch"],
  },
  justifyContent: {
    type: "choice",
    options: [
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
    ],
  },
  padding: styleNumberProp,
  paddingX: styleNumberProp,
  paddingY: styleNumberProp,
  paddingTop: styleNumberProp,
  paddingBottom: styleNumberProp,
  paddingLeft: styleNumberProp,
  paddingRight: styleNumberProp,
  margin: styleNumberProp,
  marginX: styleNumberProp,
  marginY: styleNumberProp,
  marginTop: styleNumberProp,
  marginBottom: styleNumberProp,
  marginLeft: styleNumberProp,
  marginRight: styleNumberProp,
};
