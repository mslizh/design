import { IconButtonProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";

export const ICON_BUTTON_META: CodeComponentMeta<IconButtonProps> = {
   name: "IconButton",
   props: {
      children: "slot",
      color: {
         type: "choice",
         options: [
            "inherit",
            "default",
            "primary",
            "secondary",
            "error",
            "info",
            "success",
            "warning",
         ],
      },
      disabled: "boolean",
      edge: {
         type: "choice",
         options: ["end", "start"],
      },
      size: {
         type: "choice",
         options: ["small", "medium", "large"],
      },
      onClick: {
         type: "eventHandler",
         argTypes: [],
      },
      sx: "object",
   },
   styleSections: ["visibility"],
};
