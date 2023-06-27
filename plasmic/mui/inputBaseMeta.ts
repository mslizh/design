import { CodeComponentMeta } from "@plasmicapp/host";
import { InputBaseProps } from "@mui/material";
import { inputHelpers } from "@/plasmic/helpers";

export const inputBaseMeta: CodeComponentMeta<InputBaseProps> = {
   name: "InputBase",
   props: {
      value: "string",
      textAlign: "string",
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
         options: ["small", "medium", "large"],
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
};
