import { CodeComponentMeta } from "@plasmicapp/host";
import { DividerProps } from "@mui/material";

export const dividerMeta: CodeComponentMeta<DividerProps> = {
  name: "Divider",
  props: {
    children: {
      type: "slot",
      hidePlaceholder: true,
    },
    light: "boolean",
    orientation: {
      type: "choice",
      options: ["horizontal", "vertical"],
    },
    textAlign: {
      type: "choice",
      options: ["center", "left", "right"],
    },
    variant: {
      type: "choice",
      options: ["fullWidth", "inset", "middle"],
    },
    sx: "object",
  },
  importPath: "@mui/material",
};
