import CardActions from "@mui/material/CardActions";
import { registerComponent } from "@plasmicapp/host";

export function registerCardActions() {
  registerComponent(CardActions, {
    name: "CardActions",
    props: {
      children: "slot",
      disableSpacing: "boolean",
    },
    importPath: "@mui/material",
  });
}
