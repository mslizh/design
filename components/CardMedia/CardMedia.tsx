import { CardMedia } from "@mui/material";
import { registerComponent } from "@plasmicapp/host";

export function registerCardMedia() {
  registerComponent(CardMedia, {
    name: "CardMedia",
    props: {
      children: "slot",
      image: "string",
      src: "string",
    },
    importPath: "@mui/material",
  });
}
