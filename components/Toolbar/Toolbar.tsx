import Toolbar from "@mui/material/Toolbar";
import { registerComponent } from "@plasmicapp/host";

export function registerToolbar(styleProps: any) {
  registerComponent(Toolbar, {
    name: "Toolbar",
    props: {
      children: "slot",
      disableGutters: {
        type: "boolean",
        defaultValue: false
      },
      variant: {
        type: "choice",
        options: ["dense", "regular"],
        defaultValue: "regular"
      }
    },
    importPath: "@mui/material"
  });
}