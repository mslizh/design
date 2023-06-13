import { FormGroupProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const formGroupMeta: CodeComponentMeta<FormGroupProps> = {
   name: "FormGroup",
   props: {
      children: "slot",
      row: "boolean",
      sx: "object",
   },
   importPath: "@mui/material",
};
