import {
   InputAdornmentProps,
   InputBaseProps,
   OutlinedInputProps,
} from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";

export const INPUT_ADORNMENT_META: CodeComponentMeta<InputAdornmentProps> = {
   name: "InputAdornment",
   props: {
      position: {
         type: "choice",
         options: ["start", "end"],
         defaultValue: "start",
      },
      children: "slot",
      disablePointerEvents: "boolean",
      variant: {
         type: "choice",
         options: ["filled", "outlined", "standard"],
         defaultValue: "start",
      },
      sx: "object",
   },
   styleSections: ["visibility"],
};

export const INPUT_BASE_META: CodeComponentMeta<InputBaseProps> = {
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
         onChangeArgsToValue: (event) => event.target.value,
      },
   },
   styleSections: ["visibility"],
};

export const OUTLINED_INPUT_META: CodeComponentMeta<OutlinedInputProps> = {
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
         onChangeArgsToValue: (event) => event.target.value,
      },
   },
   styleSections: ["visibility"],
};
