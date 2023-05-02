import CardContent from "@mui/material/CardContent";
import { registerComponent } from "@plasmicapp/host";

export function registerCardContent() {
  registerComponent(CardContent, {
    name: "CardContent",
    props: {
      children: "slot",
    },
    importPath: "@mui/material",
  });
}
