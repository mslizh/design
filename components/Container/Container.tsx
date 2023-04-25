import Container from "@mui/material/Container";
import { registerComponent } from "@plasmicapp/host";

export function registerContainer() {
  registerComponent(Container, {
    name: "Container",
    props: {
      children: "slot",
      disableGutters: "boolean",
      fixed: "boolean",
      maxWidth: {
        type: "choice",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
      sx: "object",
    },
    importPath: "@mui/material",
  });
}
