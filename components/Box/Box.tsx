import { registerComponent } from "@plasmicapp/host";
import Box from "@mui/material/Box";

export function registerBox() {
  registerComponent(Box, {
    name: "Box",
    props: {
      children: "slot",
      sx: "object",
    },
    importPath: "@mui/material",
  });
}
