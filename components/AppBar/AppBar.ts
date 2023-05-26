import AppBar from "@mui/material/AppBar";
import { registerComponent } from "@plasmicapp/host";

export function registerAppBar(styleProps: any) {
    registerComponent(AppBar, {
        name: "AppBar",
        props: {
            children: "slot",
            color: {
                type: "choice",
                options: [
                    "default",
                    "inherit",
                    "primary",
                    "secondary",
                    "transparent"
                ]
            },
            enableColorOnDark: "boolean",
            position: {
                type: "choice",
                options: [
                    "absolute",
                    "fixed",
                    "relative",
                    "static",
                    "sticky"
                ],
                defaultValue: "fixed"
            },
            elevation: {
                type: "number",
                helpText: "от 0 до 24",
                defaultValue: 1
            },
            square: "boolean",
            variant: {
                type: "choice",
                options: ["elevation", "outlined"]
            }
        },
        importPath: "@mui/material"
    });
}