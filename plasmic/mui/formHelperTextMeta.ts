import { FormHelperTextProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const formHelperTextMeta: CodeComponentMeta<FormHelperTextProps> = {
   name: "FormHelperText",
   props: {
      children: "string",
      required: "boolean",
      disabled: "boolean",
      error: "boolean",
      focused: "boolean",
      filled: "boolean",
      variant: {
         type: "choice",
         options: ["filled", "outlined", "standard"],
      },
      margin: {
         type: "choice",
         options: ["dense"],
      },
      sx: "object",
   },
   importPath: "@mui/material",
};
