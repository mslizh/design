import { registerComponent } from "@plasmicapp/host";
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
   Container,
   Drawer,
} from "@mui/material";
import { appBarMeta, badgeMeta, boxMeta } from "@/plasmic/mui";
import { buttonMeta } from "@/plasmic/mui/buttonMeta";
import { buttonGroupMeta } from "@/plasmic/mui/buttonGroupMeta";
import { cardMeta } from "@/plasmic/mui/cardMeta";
import { cardActionAreaMeta } from "@/plasmic/mui/cardActionAreaMeta";
import { cardActionsMeta } from "@/plasmic/mui/cardActionsMeta";
import { cardContentMeta } from "@/plasmic/mui/cardContentMeta";
import { cardHeaderMeta } from "@/plasmic/mui/cardHeaderMeta";
import { cardMediaMeta } from "@/plasmic/mui/cardMediaMeta";
import { checkboxMeta } from "@/plasmic/mui/checkboxMeta";
import { containerMeta } from "@/plasmic/mui/containerMeta";
import { drawerMeta } from "@/plasmic/mui/drawerMeta";

export function registerMuiComponents() {
   registerComponent(AppBar, appBarMeta);
   registerComponent(Badge, badgeMeta);
   registerComponent(Box, boxMeta);
   registerComponent(Button, buttonMeta);
   registerComponent(ButtonGroup, buttonGroupMeta);
   registerComponent(Card, cardMeta);
   registerComponent(CardActionArea, cardActionAreaMeta);
   registerComponent(CardActions, cardActionsMeta);
   registerComponent(CardContent, cardContentMeta);
   registerComponent(CardHeader, cardHeaderMeta);
   registerComponent(CardMedia, cardMediaMeta);
   registerComponent(Checkbox, checkboxMeta);
   registerComponent(Container, containerMeta);
   registerComponent(Drawer, drawerMeta);
}
