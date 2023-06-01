import {CodeComponentMeta} from "@plasmicapp/host";
import {CardMediaProps} from "@mui/material";

export const cardMediaMeta: CodeComponentMeta<CardMediaProps> = {
    name: "CardMedia",
    props: {
        children: "slot",
        image: "string",
        src: "string",
    },
    importPath: "@mui/material",
}