import Card from "@mui/material/Card";
import { registerComponent } from "@plasmicapp/host";

export function registerCard() {
  registerComponent(Card, {
    name: "Card",
    props: {
      children: "slot",
      raised: "boolean",
    },
    importPath: "@mui/material",
  });
}
