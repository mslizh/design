import { BoxProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const boxMeta: CodeComponentMeta<BoxProps> = {
   name: "Box",
   props: {
      children: {
         type: "slot",
         hidePlaceholder: true,
      },
      padding: "number",
      margin: "number",
   },
   importPath: "@mui/material",
};
