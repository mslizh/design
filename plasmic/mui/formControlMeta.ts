import { FormControlProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const formControlMeta: CodeComponentMeta<FormControlProps> = {
   name: "FormControl",
   props: {
      children: "slot",
      color: {
         type: "choice",
         options: [
            "primary",
            "secondary",
            "error",
            "info",
            "success",
            "warning",
         ],
      },
      variant: {
         type: "choice",
         options: ["filled", "outlined", "standard"],
      },
      required: "boolean",
      disabled: "boolean",
      error: "boolean",
      focused: "boolean",
      fullWidth: "boolean",
      margin: {
         type: "choice",
         options: ["none", "dense", "normal"],
      },
      size: {
         type: "choice",
         options: ["medium", "small"],
      },
      sx: "object",
   },
   importPath: "@mui/material",
};
