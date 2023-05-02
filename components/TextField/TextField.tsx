import TextField from "@mui/material/TextField";
import { registerComponent } from "@plasmicapp/host";

export function registerTextField() {
  registerComponent(TextField, {
    name: "TextField",
    props: {
      value: "string",
      label: "string",
      helperText: "string",
      placeholder: "string",
      required: "boolean",
      fullWidth: "boolean",
      disabled: "boolean",
      error: "boolean",
      multiline: "boolean",
      rows: "number",
      maxRows: {
        type: "number",
        hidden: (props) => !props.multiline,
      },
      minRows: {
        type: "number",
        hidden: (props) => !props.multiline,
      },
      variant: {
        type: "choice",
        options: ["filled", "outlined", "standard"],
      },
      size: {
        type: "choice",
        options: ["medium", "small"],
      },
      autoComplete: "string",
      autoFocus: "boolean",
      color: {
        type: "choice",
        options: [
          "primary",
          "secondary",
          "error",
          "info",
          "success",
          "warning",
        ],
      },
      defaultValue: "string",
      margin: {
        type: "choice",
        options: ["dense", "none", "normal"],
      },
      id: "string",
      name: "string",
      onChange: {
        type: "eventHandler",
        argTypes: [],
      },
      type: "string",
    },
    importPath: "@mui/material",
  });
}
