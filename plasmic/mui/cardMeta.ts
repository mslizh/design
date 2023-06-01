import { CardProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const cardMeta: CodeComponentMeta<CardProps> = {
   name: "Card",
   props: {
      children: "slot",
      raised: "boolean",
   },
   importPath: "@mui/material",
};
