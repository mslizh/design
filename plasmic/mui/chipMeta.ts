import { ChipProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const chipMeta: CodeComponentMeta<ChipProps> = {
  name: "Chip",
  props: {
    variant: {
      type: "choice",
      options: ["filled", "outlined"]
    },
    color: {
      type: "choice",
      options: ["default", "primary", "secondary", "error", "info", "success", "warning"]
    },
    size: {
      type: "choice",
      options: ["medium", "small"]
    },
    icon: "slot",
    label: "slot",
    deleteIcon: "slot",
    onDelete: {
      type: "eventHandler",
      argTypes: [],
    },
    disabled: "boolean",
    clickable: "boolean",
    sx: "object"
  },
  importPath: "@mui/material"
}