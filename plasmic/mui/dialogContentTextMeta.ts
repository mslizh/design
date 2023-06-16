import { DialogContentTextProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const dialogContentTextMeta: CodeComponentMeta<DialogContentTextProps> =
   {
      name: "DialogContentText",
      props: {
         children: "slot",
         sx: "object",
      },
      importPath: "@mui/material",
   };
