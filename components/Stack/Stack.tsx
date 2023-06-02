import { Stack } from "@mui/material";
import { registerComponent } from "@plasmicapp/host";

export function registerStack(styleProps: any) {
  registerComponent(Stack, {
    name: "Stack",
    props: {
      children: "slot",
      direction: {
        type: "choice",
        options: ["row", "row-reverse", "column", "column-reverse"],
      },
      spacing: {
        type: "number",
        helpText: "Базовое значение 8px.",
      },
      divider: {
        type: "slot",
        hidePlaceholder: true,
      },
      bgcolor: "string",
      border: "string",
      borderColor: "string",
      borderRadius: "string",
      display: "string",
      ...styleProps,
    },
    importPath: "@mui/material",
  });
}
