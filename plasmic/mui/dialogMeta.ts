import { DialogProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const dialogMeta: CodeComponentMeta<DialogProps> = {
   name: "Dialog",
   props: {
      open: {
         type: "boolean",
         defaultValue: false,
      },
      children: "slot",
      fullScreen: "boolean",
      fullWidth: "boolean",
      maxWidth: {
         type: "choice",
         options: ["xs", "sm", "md", "lg", "xl"],
      },
      onClose: {
         type: "eventHandler",
         argTypes: [],
      },
      scroll: {
         type: "choice",
         options: ["body", "paper"],
      },
      sx: "object",
   },
   importPath: "@mui/material",
};
