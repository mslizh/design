import { Paper } from "@mui/material";
import { registerComponent } from "@plasmicapp/host";

export function registerPaper(styleProps: any) {
  registerComponent(Paper, {
    name: "Paper",
    props: {
      children: "slot",
      elevation: {
        type: "number",
        helpText: "от 0 до 24",
      },
      square: "boolean",
      variant: {
        type: "choice",
        options: ["elevation", "outlined"],
      },
      ...styleProps,
    },
    importPath: "@mui/material",
  });
}
