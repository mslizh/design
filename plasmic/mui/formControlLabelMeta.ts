import { FormControlLabelProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const formControlLabelMeta: CodeComponentMeta<FormControlLabelProps> = {
   name: "FormControlLabel",
   props: {
      control: "slot",
      value: "string",
      checked: "boolean",
      required: "boolean",
      disabled: "boolean",
      disableTypography: "boolean",
      label: "string",
      labelPlacement: {
         type: "choice",
         options: ["bottom", "end", "start", "top"],
      },
      onChange: {
         type: "eventHandler",
         argTypes: [],
      },
      sx: "object",
   },
   importPath: "@mui/material",
};
