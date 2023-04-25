import Typography from "@mui/material/Typography";
import { registerComponent } from "@plasmicapp/host";

export function registerTypography() {
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
    importPath: "@mui/material",
  });
}
