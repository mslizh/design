import { DialogActionsProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const dialogActionsMeta: CodeComponentMeta<DialogActionsProps> = {
   name: "DialogActions",
   props: {
      children: "slot",
      disableSpacing: "boolean",
      sx: "object",
   },
   importPath: "@mui/material",
};
