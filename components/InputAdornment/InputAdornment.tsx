import { InputAdornment } from "@mui/material";
import { registerComponent } from "@plasmicapp/host";

export function registerInputAdornment() {
  registerComponent(InputAdornment, {
    name: "InputAdornment",
    props: {
      position: {
        type: "choice",
        options: ["start", "end"],
        defaultValue: "start",
      },
      children: "slot",
      disablePointerEvents: "boolean",
      variant: {
        type: "choice",
        options: ["filled", "outlined", "standard"],
        defaultValue: "start",
      },
      sx: "object",
    },
    importPath: "@mui/material",
  });
}
