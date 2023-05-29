import { AppBar, Badge, Box, Button, ButtonGroup } from "@mui/material";
import { registerComponent } from "@plasmicapp/host";
import { appBarMeta } from "./appBarMeta";
import { badgeMeta } from "./badgeMeta";
import { boxMeta } from "./boxMeta";
import { buttonMeta } from "./buttonMeta";
import { buttonGroupMeta } from "./buttonGroupMeta";

export function registerMuiComponents() {
   registerComponent(AppBar, appBarMeta);
   registerComponent(Badge, badgeMeta);
   registerComponent(Box, boxMeta);
   registerComponent(Button, buttonMeta);
   registerComponent(ButtonGroup, buttonGroupMeta);
}
