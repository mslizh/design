import { CardActionAreaProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const cardActionAreaMeta: CodeComponentMeta<CardActionAreaProps> = {
   name: "CardActionArea",
   props: {
      children: "slot",
      onClick: {
         type: "eventHandler",
         argTypes: [],
      },
   },
   importPath: "@mui/material",
};
