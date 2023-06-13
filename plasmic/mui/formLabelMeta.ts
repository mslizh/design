import { FormLabelProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const formLabelMeta: CodeComponentMeta<FormLabelProps> = {
   name: "FormLabel",
   props: {
      children: "string",
      color: {
         type: "choice",
         options: [
            "error",
            "info",
            "primary",
            "secondary",
            "success",
            "warning",
         ],
      },
      required: "boolean",
      disabled: "boolean",
      error: "boolean",
      focused: "boolean",
      filled: "boolean",
      sx: "object",
   },
   importPath: "@mui/material",
};
