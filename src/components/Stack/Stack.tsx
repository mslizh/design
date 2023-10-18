import { StackProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";

export const STACK_META: CodeComponentMeta<StackProps> = {
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
      sx: "object",
   },
   styleSections: ["visibility"],
};
