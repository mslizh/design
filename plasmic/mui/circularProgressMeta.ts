import { CircularProgressProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const circularProgressMeta: CodeComponentMeta<CircularProgressProps> = {
  name: "CircularProgress",
  props: {
    color: {
      type: "choice",
      options: ["inherit", "primary", "secondary", "error", "info", "success", "warning"],
    },
    disableShrink: "boolean",
    size: "string",
    sx: "object",
    thinkness: "number",
    value: "number",
    variant: {
      type: "choice",
      options: ["determinate", "indeterminate"],
      defaultValue: "indeterminate"
    }
  },
  importPath: "@mui/material"
}