import { registerDivider } from "./Divider";
import { registerFileUploader } from "./FileUploader";
import { registerFileCard } from "./FileCard";
import { registerFileGrid } from "./FileGrid";
import { registerFileList } from "./FileList";
import { registerFileListItem } from "./FileListItem";
import { registerIcon } from "./Icon";
import { registerList } from "./List";
import { registerListItem } from "./ListItem";
import { registerListItemAvatar } from "./ListItemAvatar";
import { registerListItemButton } from "./ListItemButton";
import { registerListItemIcon } from "./ListItemIcon";
import { registerListItemText } from "./ListItemText";
import { registerTypography } from "./Typography";
import { registerUpload } from "./Upload";
import { registerWithToast } from "./Toaster";
import { registerScheduler } from "./Scheduler";
import { registerDrawer } from "./Drawer";
import { registerToggleButton } from "./ToggleButton";
import { registerToggleButtonGroup } from "./ToggleButtonGroup";
import { registerIconButton } from "./IconButton";
import { registerCard } from "./Card";
import { registerCardActionArea } from "./CardActionArea";
import { registerCardActions } from "./CardActions";
import { registerCardContent } from "./CardContent";
import { registerCardHeader } from "./CardHeader";
import { registerCardMedia } from "./CardMedia";
import { registerButtonGroup } from "./ButtonGroup";
import { registerButton } from "./Button";
import { registerTextField } from "./TextField";
import { registerInputBase } from "./InputBase";
import { registerCheckbox } from "./Checkbox";
import { registerPaper } from "./Paper";
import { registerGrid } from "./Grid";
import { registerContainer } from "./Container";
import { registerStack } from "./Stack";
import { registerBox } from "./Box";

export function registerComponents() {
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
  registerIconButton();
  registerInputBase();
  registerList();
  registerListItem();
  registerListItemAvatar();
  registerListItemButton();
  registerListItemIcon();
  registerListItemText();
  registerPaper(styleProps);
  registerScheduler();
  registerStack(styleProps);
  registerTextField();
  registerToggleButton();
  registerToggleButtonGroup();
  registerTypography();
  registerUpload();
  registerWithToast();
}

const styleNumberProp = {
  type: "number",
  advanced: true,
};

export const styleProps = {
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
