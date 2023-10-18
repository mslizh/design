import { DrawerProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";

export const DRAWER_META: CodeComponentMeta<DrawerProps> = {
   name: "Drawer",
   props: {
      children: "slot",
      anchor: {
         type: "choice",
         options: ["bottom", "left", "right", "top"],
      },
      elevation: "number",
      hideBackdrop: "boolean",
      open: "boolean",
      variant: {
         type: "choice",
         options: ["permanent", "persistent", "temporary"],
      },
      sx: "object",
      PaperProps: {
         type: "object",
         fields: {
            sx: "object",
         },
      },
      onClose: {
         type: "eventHandler",
         argTypes: [],
      },
   },
   styleSections: ["visibility"],
};
