import { BadgeProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const badgeMeta: CodeComponentMeta<BadgeProps> = {
   name: "Badge",
   props: {
      anchorOrigin: {
         type: "object",
         defaultValue: { vertical: "top", horizontal: "right" },
      },
      badgeContent: {
         type: "slot",
         hidePlaceholder: true,
      },
      children: "slot",
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
      invisible: "boolean",
      max: {
         type: "number",
         helpText: "Max count to show.",
      },
      showZero: "boolean",
      overlap: {
         type: "choice",
         options: ["circular", "rectangular"],
      },
      variant: {
         type: "choice",
         options: ["dot", "standard"],
      },
      sx: "object",
   },
   importPath: "@mui/material",
};
