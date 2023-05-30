import { registerButton } from "@/components/Button";
import { registerButtonGroup } from "@/components/ButtonGroup";
import { registerCard } from "@/components/Card";
import { registerCardActionArea } from "@/components/CardActionArea";
import { registerCardActions } from "@/components/CardActions";
import { registerCardContent } from "@/components/CardContent";
import { registerCardHeader } from "@/components/CardHeader";
import { registerCardMedia } from "@/components/CardMedia";
import { registerCheckbox } from "@/components/Checkbox";
import { registerContainer } from "@/components/Container";
import { registerDivider } from "@/components/Divider";
import { registerDrawer } from "@/components/Drawer";
import { registerFileUploader } from "@/components/FileUploader";
import { registerFileCard } from "@/components/FileCard";
import { registerFileGrid } from "@/components/FileGrid";
import { registerFileList } from "@/components/FileList";
import { registerFileListItem } from "@/components/FileListItem";
import { registerGrid } from "@/components/Grid";
import { registerIcon } from "@/components/Icon";
import { registerIconButton } from "@/components/IconButton";
import { registerInputAdornment } from "@/components/InputAdornment";
import { registerInputBase } from "@/components/InputBase";
import { registerList } from "@/components/List";
import { registerListItem } from "@/components/ListItem";
import { registerListItemAvatar } from "@/components/ListItemAvatar";
import { registerListItemButton } from "@/components/ListItemButton";
import { registerListItemIcon } from "@/components/ListItemIcon";
import { registerListItemText } from "@/components/ListItemText";
import { registerOutlinedInput } from "@/components/OutlinedInput";
import { registerPaper } from "@/components/Paper";
import { registerScheduler } from "@/components/Scheduler";
import { registerStack } from "@/components/Stack";
import { registerTypography } from "@/components/Typography";
import { registerToggleButton } from "@/components/ToggleButton";
import { registerToggleButtonGroup } from "@/components/ToggleButtonGroup";
import { registerUpload } from "@/components/Upload";
import { registerToaster } from "@/components/Toaster";
import { registerTooltip } from "@/components/Tooltip";
import { registerToolbar } from "@/components/Toolbar";

export function registerAll() {
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
   registerToaster();
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
