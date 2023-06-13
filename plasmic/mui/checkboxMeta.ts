import { CodeComponentMeta } from "@plasmicapp/host";
import { CheckboxProps } from "@/components/Checkbox";

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
        edge: {
            type: "choice",
            options: ["start", "end"]
        }
    },
    importPath: "@mui/material",
}