import { CardContentProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const cardContentMeta: CodeComponentMeta<CardContentProps> = {
   name: "CardContent",
   props: {
      children: "slot",
   },
   importPath: "@mui/material",
};
