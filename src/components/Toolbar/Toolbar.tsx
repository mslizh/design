import { ToolbarProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";

export const TOOLBAR_META: CodeComponentMeta<ToolbarProps> = {
   name: "Toolbar",
   props: {
      children: "slot",
      disableGutters: {
         type: "boolean",
         defaultValue: false,
      },
      variant: {
         type: "choice",
         options: ["dense", "regular"],
         defaultValue: "regular",
      },
      sx: "object",
   },
   styleSections: ["visibility"],
};
