import { PaperProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";

export const PAPER_META: CodeComponentMeta<PaperProps> = {
   name: "Paper",
   props: {
      children: "slot",
      elevation: {
         type: "number",
         helpText: "от 0 до 24",
      },
      square: "boolean",
      variant: {
         type: "choice",
         options: ["elevation", "outlined"],
      },
      sx: "object",
   },
   styleSections: ["visibility"],
};
