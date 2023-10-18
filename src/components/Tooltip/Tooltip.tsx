import { TooltipProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";

export const TOOLTIP_META: CodeComponentMeta<TooltipProps> = {
   name: "Tooltip",
   props: {
      title: "slot",
      children: "slot",
      followCursor: "boolean",
      open: "boolean",
      placement: {
         type: "choice",
         defaultValue: "bottom",
         options: [
            "bottom-end",
            "bottom-start",
            "bottom",
            "left-end",
            "left-start",
            "left",
            "right-end",
            "right-start",
            "right",
            "top-end",
            "top-start",
            "top",
         ],
      },
   },
   styleSections: ["visibility"],
};
