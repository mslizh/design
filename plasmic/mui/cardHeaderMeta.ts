import {CodeComponentMeta} from "@plasmicapp/host";
import {CardHeaderProps} from "@mui/material";

export const cardHeaderMeta: CodeComponentMeta<CardHeaderProps> = {
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
    importPath: "@mui/material",
}