import { DialogContentProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const dialogContentMeta: CodeComponentMeta<DialogContentProps> = {
   name: "DialogContent",
   props: {
      children: "slot",
      dividers: "boolean",
      sx: "object",
   },
   importPath: "@mui/material",
};
