import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";
import {
   FormControlLabelProps,
   FormControlProps,
   FormGroupProps,
   FormHelperTextProps,
   FormLabelProps,
} from "@mui/material";

export const FORM_CONTROL_LABEL_META: CodeComponentMeta<FormControlLabelProps> =
   {
      name: "FormControlLabel",
      props: {
         control: "slot",
         value: "string",
         checked: "boolean",
         required: "boolean",
         disabled: "boolean",
         disableTypography: "boolean",
         label: "string",
         labelPlacement: {
            type: "choice",
            options: ["bottom", "end", "start", "top"],
         },
         onChange: {
            type: "eventHandler",
            argTypes: [],
         },
         sx: "object",
      },
      styleSections: ["visibility"],
   };

export const FORM_CONTROL_META: CodeComponentMeta<FormControlProps> = {
   name: "FormControl",
   props: {
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
      variant: {
         type: "choice",
         options: ["filled", "outlined", "standard"],
      },
      required: "boolean",
      disabled: "boolean",
      error: "boolean",
      focused: "boolean",
      fullWidth: "boolean",
      margin: {
         type: "choice",
         options: ["none", "dense", "normal"],
      },
      size: {
         type: "choice",
         options: ["medium", "small"],
      },
      sx: "object",
   },
   styleSections: ["visibility"],
};

export const FORM_GROUP: CodeComponentMeta<FormGroupProps> = {
   name: "FormGroup",
   props: {
      children: "slot",
      row: "boolean",
      sx: "object",
   },
   styleSections: ["visibility"],
};

export const FORM_HELPER_TEXT_META: CodeComponentMeta<FormHelperTextProps> = {
   name: "FormHelperText",
   props: {
      children: "string",
      required: "boolean",
      disabled: "boolean",
      error: "boolean",
      focused: "boolean",
      filled: "boolean",
      variant: {
         type: "choice",
         options: ["filled", "outlined", "standard"],
      },
      margin: {
         type: "choice",
         options: ["dense"],
      },
      sx: "object",
   },
   styleSections: ["visibility"],
};

export const FORM_LABEL_META: CodeComponentMeta<FormLabelProps> = {
   name: "FormLabel",
   props: {
      children: "string",
      color: {
         type: "choice",
         options: [
            "error",
            "info",
            "primary",
            "secondary",
            "success",
            "warning",
         ],
      },
      required: "boolean",
      disabled: "boolean",
      error: "boolean",
      focused: "boolean",
      filled: "boolean",
      sx: "object",
   },
   styleSections: ["visibility"],
};
