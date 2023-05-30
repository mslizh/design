import { LinearProgressProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const linearProgressMeta: CodeComponentMeta<LinearProgressProps> = {
  name: "LinearProgress",
  props: {
    color: {
      type: "choice",
      options: ["inherit", "primary", "secondary"]
    },
    sx: "object",
    value: "number",
    valueBuffer: "number",
    variant: {
      type: "choice",
      options: ["buffer", "determinate", "indeterminate", "query"],
      defaultValue: "indeterminate"
    }
  },
  importPath: "@mui/material"
}