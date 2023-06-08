import {CodeComponentMeta} from "@plasmicapp/host";
import {CheckboxProps} from "@mui/material";

export const checkboxMeta: CodeComponentMeta<CheckboxProps> = {
    name: "Checkbox",
    props: {
        checked: {
            type: "boolean",
        },
        defaultChecked: {
            type: "boolean",
        },
        onClick: {
            type: "eventHandler",
            argTypes: [],
        },
        indeterminate: "boolean",
        disabled: "boolean",
        disableRipple: "boolean",
        required: "boolean",
        color: {
            type: "choice",
            options: [
                "default",
                "primary",
                "secondary",
                "error",
                "info",
                "success",
                "warning",
                ],
        },
        size: {
            type: "choice",
            options: ["medium", "small"],
        },
    },
    importPath: "@mui/material",
}