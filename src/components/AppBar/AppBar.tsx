import { AppBarProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";

export const APP_BAR_META: CodeComponentMeta<AppBarProps> = {
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
      },
      square: "boolean",
      variant: {
         type: "choice",
         options: ["elevation", "outlined"],
      },
      sx: "object",
   },
   styleSections: ["visibility"],
};
