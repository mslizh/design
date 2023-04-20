import * as React from "react";
import Script from "next/script";
import { PlasmicCanvasHost, registerComponent } from "@plasmicapp/host";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { FileUploader } from "@/components/FileUploader";
import { FileCard } from "@/components/FileCard";
import { CssBaseline } from "@mui/material";
import { FileGrid } from "@/components/FileGrid";
import { FileList } from "@/components/FileList";
import { FileListItem } from "@/components/FileListItem";
import { Icon } from "@/components/Icon";

registerComponent(Box, {
  name: "Box",
  props: {
    children: "slot",
    sx: "object",
  },
  importPath: "@mui/material/Box",
});

registerComponent(Container, {
  name: "Container",
  props: {
    children: "slot",
    disableGutters: "boolean",
    fixed: "boolean",
    maxWidth: {
      type: "choice",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    sx: "object",
  },
  importPath: "@mui/material/Container",
});

registerComponent(Divider, {
  name: "Divider",
  props: {
    children: "slot",
    light: "boolean",
    orientation: {
      type: "choice",
      options: ["horizontal", "vertical"],
    },
    textAlign: {
      type: "choice",
      options: ["center", "left", "right"],
    },
    variant: {
      type: "choice",
      options: ["fullWidth", "inset", "middle"],
    },
    sx: "object",
  },
  importPath: "@mui/material/Divider",
});

registerComponent(Grid, {
  name: "Grid",
  props: {
    children: "slot",
    container: "boolean",
    item: "boolean",
    columns: {
      type: "object",
      hidden: (props) => !props.container,
    },
    spacing: {
      type: "number",
      hidden: (props) => !props.container,
    },
    columnSpacing: {
      type: "number",
      hidden: (props) => !props.container,
    },
    rowSpacing: {
      type: "number",
      hidden: (props) => !props.container,
    },
    xs: "number",
    sm: "number",
    md: "number",
    lg: "number",
    xl: "number",
    sx: "object",
  },
  importPath: "@mui/material/Grid",
});

registerComponent(FileCard, {
  name: "FileCard",
  props: {
    type: "string",
    name: "string",
    lastModified: "number",
    webkitRelativePath: "string",
  },
  importPath: "@/components/FileCard",
});

registerComponent(FileGrid, {
  name: "FileGrid",
  props: {},
  importPath: "@/components/FileGrid",
});

registerComponent(FileList, {
  name: "FileList",
  props: {},
  importPath: "@/components/FileList",
});

registerComponent(FileListItem, {
  name: "FileListItem",
  props: {
    type: "string",
    name: "string",
    lastModified: "number",
    webkitRelativePath: "string",
  },
  importPath: "@/components/FileListItem",
});

registerComponent(FileUploader, {
  name: "FileUploader",
  props: {
    mode: {
      type: "choice",
      options: ["list", "grid"],
    },
  },
  importPath: "@/components/FileUploader",
});

registerComponent(Icon, {
  name: "Icon",
  props: {
    name: {
      type: "string",
      defaultValue: "AddRegular",
      description:
        "Найти название иконки можно на https://github.com/microsoft/fluentui-system-icons/blob/main/icons_regular.md",
    },
  },
  importPath: "@/components/Icon",
});

registerComponent(List, {
  name: "List",
  props: {
    children: "slot",
    disablePadding: "boolean",
    dense: "boolean",
    subheader: "slot",
    sx: "object",
  },
  importPath: "@mui/material/List",
});

registerComponent(ListItem, {
  name: "ListItem",
  props: {
    children: "slot",
    disablePadding: "boolean",
  },
  importPath: "@mui/material/ListItem",
});

registerComponent(ListItemAvatar, {
  name: "ListItemAvatar",
  props: {
    children: "slot",
    sx: "object",
  },
  importPath: "@mui/material/ListItemAvatar",
});

registerComponent(ListItemButton, {
  name: "ListItemButton",
  props: {
    children: "slot",
    alignItems: {
      type: "choice",
      options: ["center", "flex-start"],
    },
    autoFocus: "boolean",
    dense: "boolean",
    disabled: "boolean",
    disableGutters: "boolean",
    divider: "boolean",
    selected: "boolean",
    sx: "object",
  },
  importPath: "@mui/material/ListItemButton",
});

registerComponent(ListItemIcon, {
  name: "ListItemIcon",
  props: {
    children: "slot",
    sx: "object",
  },
  importPath: "@mui/material/ListItemIcon",
});

registerComponent(ListItemText, {
  name: "ListItemText",
  props: {
    inset: "boolean",
    primary: "string",
    secondary: "string",
    sx: "object",
  },
  importPath: "@mui/material/ListItemText",
});

registerComponent(ListSubheader, {
  name: "ListSubheader",
  props: {
    children: "string",
    color: "string",
    disableGutters: "boolean",
    disableSticky: "boolean",
    inset: "boolean",
    sx: "object",
  },
  importPath: "@mui/material/ListSubheader",
});

registerComponent(Stack, {
  name: "Stack",
  props: {
    children: "slot",
    direction: {
      type: "choice",
      options: ["column-reverse", "column", "row-reverse", "row"],
    },
    divider: {
      type: "slot",
      allowedComponents: ["Divider"],
    },
    spacing: "number",
    sx: "object",
  },
  importPath: "@mui/material/Stack",
});

registerComponent(Typography, {
  name: "Typography",
  props: {
    children: {
      type: "string",
      defaultValue: "Some text",
    },
    align: {
      type: "choice",
      options: ["center", "inherit", "justify", "left", "right"],
    },
    gutterBottom: "boolean",
    noWrap: "boolean",
    variant: {
      type: "choice",
      options: [
        "inherit",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "overline",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "button",
        "caption",
      ],
    },
    sx: "object",
  },
  importPath: "@mui/material/Typography",
});

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
