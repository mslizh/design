import { OutlinedInput } from "@mui/material";
import { registerComponent } from "@plasmicapp/host";
import { inputHelpers } from "../InputBase";

export function registerOutlinedInput() {
  registerComponent(OutlinedInput, {
    name: "OutlinedInput",
    props: {
      startAdornment: {
        type: "slot",
        hidePlaceholder: true,
      },
      endAdornment: {
        type: "slot",
        hidePlaceholder: true,
      },
      value: "string",
      label: "string",
      helperText: "string",
      placeholder: "string",
      required: "boolean",
      fullWidth: "boolean",
      disabled: "boolean",
      error: "boolean",
      multiline: "boolean",
      rows: {
        type: "number",
        hidden: (props) => !props.multiline,
      },
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
      sx: "object",
    },
    states: {
      value: {
        type: "writable",
        variableType: "text",
        valueProp: "value",
        onChangeProp: "onChange",
      },
    },
    componentHelpers: {
      helpers: inputHelpers,
      importName: "inputHelpers",
      importPath: "@/components/InputBase",
    },
    importPath: "@mui/material",
  });
}
