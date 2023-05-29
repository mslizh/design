import { AppBarProps } from "@mui/material/AppBar";
import { CodeComponentMeta } from "@plasmicapp/host";

export const appBarMeta: CodeComponentMeta<AppBarProps> = {
   name: "AppBar",
   props: {
      children: "slot",
      color: {
         type: "choice",
         options: ["default", "inherit", "primary", "secondary", "transparent"],
      },
      enableColorOnDark: "boolean",
      position: {
         type: "choice",
         options: ["absolute", "fixed", "relative", "static", "sticky"],
         defaultValue: "fixed",
      },
      elevation: {
         type: "number",
         helpText: "от 0 до 24",
         defaultValue: 1,
      },
      square: "boolean",
      variant: {
         type: "choice",
         options: ["elevation", "outlined"],
      },
   },
   importPath: "@mui/material",
};
