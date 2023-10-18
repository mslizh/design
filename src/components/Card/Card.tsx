import {
   CardActionAreaProps,
   CardActionsProps,
   CardContentProps,
   CardHeaderProps,
   CardMediaProps,
   CardProps,
} from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";

export const CARD_ACTION_AREA_META: CodeComponentMeta<CardActionAreaProps> = {
   name: "CardActionArea",
   props: {
      children: "slot",
      onClick: {
         type: "eventHandler",
         argTypes: [],
      },
   },
   styleSections: ["visibility"],
};

export const CARD_ACTIONS_META: CodeComponentMeta<CardActionsProps> = {
   name: "CardActions",
   props: {
      children: "slot",
      disableSpacing: "boolean",
   },
   styleSections: ["visibility"],
};

export const CARD_CONTENT_META: CodeComponentMeta<CardContentProps> = {
   name: "CardContent",
   props: {
      children: "slot",
   },
   styleSections: ["visibility"],
};

export const CARD_HEADER_META: CodeComponentMeta<CardHeaderProps> = {
   name: "CardHeader",
   props: {
      title: "string",
      subheader: "string",
      action: {
         type: "slot",
         hidePlaceholder: true,
      },
      avatar: {
         type: "slot",
         hidePlaceholder: true,
      },
   },
   styleSections: ["visibility"],
};

export const CARD_MEDIA_META: CodeComponentMeta<CardMediaProps> = {
   name: "CardMedia",
   props: {
      children: "slot",
      image: "string",
      src: "string",
   },
   styleSections: ["visibility"],
};

export const CARD_META: CodeComponentMeta<CardProps> = {
   name: "Card",
   props: {
      children: "slot",
      raised: "boolean",
   },
   styleSections: ["visibility"],
};
