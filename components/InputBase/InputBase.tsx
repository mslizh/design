import InputBase from "@mui/material/InputBase";
import { registerComponent } from "@plasmicapp/host";

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
        argTypes: [
          {
            name: "value",
            type: "string",
          },
        ],
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

export const inputHelpers = {
  states: {
    value: {
      onChangeArgsToValue: (
        e: Parameters<
          NonNullable<React.ComponentProps<typeof InputBase>["onChange"]>
        >[0]
      ) => {
        return e.target.value;
      },
    },
  },
};
