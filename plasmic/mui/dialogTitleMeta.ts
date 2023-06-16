import { DialogTitleProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const dialogTitleMeta: CodeComponentMeta<DialogTitleProps> = {
   name: "DialogTitle",
   props: {
      children: {
         type: "string",
         defaultValue: "Dialog title",
      },
      sx: "object",
   },
   importPath: "@mui/material",
};
