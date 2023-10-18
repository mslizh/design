import { DividerProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";

export const DIVIDER_META: CodeComponentMeta<DividerProps> = {
   name: "Divider",
   props: {
      children: {
         type: "slot",
         hidePlaceholder: true,
      },
      light: "boolean",
      orientation: {
         type: "choice",
         options: ["horizontal", "vertical"],
      },
      textAlign: {
         type: "choice",
         options: ["center", "left", "right"],
      },
      variant: {
         type: "choice",
         options: ["fullWidth", "inset", "middle"],
      },
      component: "string",
      sx: "object",
   },
   styleSections: ["visibility"],
};
