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
      secondary: "string",
      sx: "object",
   },
   importPath: "@mui/material",
};
