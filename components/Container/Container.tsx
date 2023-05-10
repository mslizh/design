import { Container } from "@mui/material";
import { registerComponent } from "@plasmicapp/host";

export function registerContainer(styleProps: any) {
  registerComponent(Container, {
    name: "Container",
    props: {
      children: "slot",
      fixed: "boolean",
      disableGutters: "boolean",
      maxWidth: {
        type: "choice",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
      ...styleProps,
    },
    importPath: "@mui/material",
  });
}
