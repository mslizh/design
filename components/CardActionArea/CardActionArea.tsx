import CardActionArea from "@mui/material/CardActionArea";
import { registerComponent } from "@plasmicapp/host";

export function registerCardActionArea() {
  registerComponent(CardActionArea, {
    name: "CardActionArea",
    props: {
      children: "slot",
    },
    importPath: "@mui/material",
  });
}
