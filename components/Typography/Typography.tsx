import Typography from "@mui/material/Typography";
import { registerComponent } from "@plasmicapp/host";

export function registerTypography(styleProps: any) {
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
      paragraph: "boolean",
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
        defaultValue: "inherit",
      },
      sx: "object",
      color: "string",
      ...styleProps,
    },
    importPath: "@mui/material",
  });
}
