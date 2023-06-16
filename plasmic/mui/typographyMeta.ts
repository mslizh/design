import { TypographyProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const typographyMeta: CodeComponentMeta<TypographyProps> = {
   name: "Typography",
   props: {
      align: {
         type: "choice",
         options: ["center", "inherit", "justify", "left", "right"],
      },
      children: {
         type: "string",
         defaultValue: "Some text",
      },
      color: "string",
      display: {
         type: "choice",
         options: ["block", "inline-block", "none"],
      },
      gutterBottom: "boolean",
      noWrap: "boolean",
      paragraph: "boolean",
      sx: "object",
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
   },
   importPath: "@mui/material",
};
