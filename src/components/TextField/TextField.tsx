import { TextFieldProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";

export const TEXT_FIELD_META: CodeComponentMeta<TextFieldProps> = {
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
      InputProps: {
         type: "object",
         fields: {
            startAdornment: {
               type: "slot",
            },
         },
      },
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
         onChangeArgsToValue: (event) => event.target.value,
      },
   },
   styleSections: ["visibility"],
};
