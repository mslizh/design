import Stack from "@mui/material/Stack";
import { registerComponent } from "@plasmicapp/host";

export function registerStack() {
  registerComponent(Stack, {
    name: "Stack",
    props: {
      children: "slot",
      direction: {
        type: "choice",
        options: ["column-reverse", "column", "row-reverse", "row"],
      },
      divider: {
        type: "slot",
        allowedComponents: ["Divider"],
      },
      spacing: "number",
      sx: "object",
    },
    importPath: "@mui/material",
  });
}
