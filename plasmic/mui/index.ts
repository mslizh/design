import {
   AppBar,
   Badge,
   Box,
   Button,
   ButtonGroup,
   LinearProgress,
   CircularProgress,
   Divider,
} from "@mui/material";
import { registerComponent } from "@plasmicapp/host";
import { appBarMeta } from "./appBarMeta";
import { badgeMeta } from "./badgeMeta";
import { boxMeta } from "./boxMeta";
import { buttonMeta } from "./buttonMeta";
import { buttonGroupMeta } from "./buttonGroupMeta";
import { linearProgressMeta } from "./linearProgressMeta";
import { circularProgressMeta } from "./circularProgressMeta";
import { dividerMeta } from "./dividerMeta";

export function registerMuiComponents() {
   registerComponent(AppBar, appBarMeta);
   registerComponent(Badge, badgeMeta);
   registerComponent(Box, boxMeta);
   registerComponent(Button, buttonMeta);
   registerComponent(ButtonGroup, buttonGroupMeta);
   registerComponent(Divider, dividerMeta);
   registerComponent(CircularProgress, circularProgressMeta);
   registerComponent(LinearProgress, linearProgressMeta);
}
