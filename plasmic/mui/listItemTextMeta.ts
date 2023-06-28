import { ListItemTextProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";
import { ElementType } from "react";

export const listItemTextMeta: CodeComponentMeta<
   ListItemTextProps<ElementType<any>, ElementType<any>>
> = {
   name: "ListItemText",
   props: {
      inset: "boolean",
      primary: {
         type: "string",
         defaultValue: "Some text…",
      },
      primaryTypographyProps: {
         type: "object",
         fields: {
            noWrap: "boolean"
         }
      },
      secondary: "string",
      secondaryTypographyProps: {
         type: "object",
         fields: {
            noWrap: "boolean"
         }
      },
      sx: "object",
   },
   importPath: "@mui/material",
};
