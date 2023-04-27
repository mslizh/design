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

export function registerComponents() {
  registerDivider();
  registerFileCard();
  registerFileGrid();
  registerFileList();
  registerFileListItem();
  registerFileUploader();
  registerIcon();
  registerList();
  registerListItem();
  registerListItemAvatar();
  registerListItemButton();
  registerListItemIcon();
  registerListItemText();
  registerScheduler();
  registerTypography();
  registerUpload();
  registerWithToast();
}
