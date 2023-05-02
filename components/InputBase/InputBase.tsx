import InputBase from "@mui/material/InputBase";
import { registerComponent } from "@plasmicapp/host";
import "./InputBase.module.css";

export function registerInputBase() {
  registerComponent(InputBase, {
    name: "InputBase",
    props: {
      value: "string",
      placeholder: "string",
      required: "boolean",
      fullWidth: "boolean",
      disabled: "boolean",
      readOnly: "boolean",
      error: "boolean",
      startAdornment: {
        type: "slot",
        hidePlaceholder: true,
      },
      endAdornment: {
        type: "slot",
        hidePlaceholder: true,
      },
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
      onBlur: {
        type: "eventHandler",
        argTypes: [],
      },
      onChange: {
        type: "eventHandler",
        argTypes: [],
      },
      type: "string",
      classes: "object",
    },
    importPath: "@mui/material",
  });
}
