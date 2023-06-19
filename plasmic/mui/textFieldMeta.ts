import { TextFieldProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";
import { inputHelpers } from "@/plasmic/helpers";

export const textFieldMeta: CodeComponentMeta<TextFieldProps> = {
   name: "TextField",
   props: {
      autoComplete: "string",
      autoFocus: "boolean",
      children: "slot",
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
      disabled: "boolean",
      error: "boolean",
      fullWidth: "boolean",
      helperText: {
         type: "slot",
         hidePlaceholder: true,
      },
      id: "string",
      label: {
         type: "slot",
         hidePlaceholder: true,
      },
      margin: {
         type: "choice",
         options: ["dense", "none", "normal"],
      },
      maxRows: {
         type: "number",
         hidden: (props) => !props.multiline,
      },
      minRows: {
         type: "number",
         hidden: (props) => !props.multiline,
      },
      multiline: "boolean",
      name: "string",
      onChange: {
         type: "eventHandler",
         argTypes: [
            {
               name: "value",
               type: "string",
            },
         ],
      },
      placeholder: "string",
      required: "boolean",
      rows: {
         type: "number",
         hidden: (props) => !props.multiline,
      },
      select: "boolean",
      size: {
         type: "choice",
         options: ["small", "medium", "large"],
      },
      sx: "object",
      type: "string",
      value: "string",
      variant: {
         type: "choice",
         options: ["filled", "outlined", "standard"],
      },
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
