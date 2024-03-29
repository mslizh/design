import { ChipProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";

export const CHIP_META: CodeComponentMeta<ChipProps> = {
   name: "Chip",
   props: {
      variant: {
         type: "choice",
         options: ["filled", "outlined"],
      },
      color: {
         type: "choice",
         options: [
            "default",
            "primary",
            "secondary",
            "error",
            "info",
            "success",
            "warning",
         ],
      },
      size: {
         type: "choice",
         options: ["medium", "small"],
      },
      icon: {
         type: "slot",
         hidePlaceholder: true,
      },
      label: "slot",
      onDelete: {
         type: "eventHandler",
         argTypes: [],
      },
      disabled: "boolean",
      clickable: "boolean",
      sx: "object",
   },
};
