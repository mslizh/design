import { CardHeader } from "@mui/material";
import { registerComponent } from "@plasmicapp/host";

export function registerCardHeader() {
  registerComponent(CardHeader, {
    name: "CardHeader",
    props: {
      title: "string",
      subheader: "string",
      action: {
        type: "slot",
        hidePlaceholder: true,
      },
      avatar: {
        type: "slot",
        hidePlaceholder: true,
      },
    },
    importPath: "@mui/material",
  });
}
