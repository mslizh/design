import {
   AppBar,
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
   CircularProgress,
   Container,
   Drawer,
   LinearProgress,
} from "@mui/material";
import { registerComponent } from "@plasmicapp/host";
import { appBarMeta } from "./appBarMeta";
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
import { circularProgressMeta } from "./circularProgressMeta";
import { containerMeta } from "./containerMeta";
import { drawerMeta } from "./drawerMeta";
import { linearProgressMeta } from "./linearProgressMeta";

export function registerMuiComponents() {
   registerComponent(AppBar, appBarMeta);
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
   registerComponent(CircularProgress, circularProgressMeta);
   registerComponent(Container, containerMeta);
   registerComponent(Drawer, drawerMeta);
   registerComponent(LinearProgress, linearProgressMeta);
}
