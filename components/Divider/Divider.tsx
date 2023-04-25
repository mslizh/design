import Divider from "@mui/material/Divider";
import { registerComponent } from "@plasmicapp/host";

export function registerDivider() {
  registerComponent(Divider, {
    name: "Divider",
    props: {
      children: "slot",
      light: "boolean",
      orientation: {
        type: "choice",
        options: ["horizontal", "vertical"],
      },
      textAlign: {
        type: "choice",
        options: ["center", "left", "right"],
      },
      variant: {
        type: "choice",
        options: ["fullWidth", "inset", "middle"],
      },
      sx: "object",
    },
    importPath: "@mui/material",
  });
}
