import { CardActionsProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const cardActionsMeta: CodeComponentMeta<CardActionsProps> = {
   name: "CardActions",
   props: {
      children: "slot",
      disableSpacing: "boolean",
   },
   importPath: "@mui/material",
};
