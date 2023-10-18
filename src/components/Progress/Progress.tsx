import { CircularProgressProps, LinearProgressProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";

export const CIRCULAR_PROGRESS_META: CodeComponentMeta<CircularProgressProps> =
   {
      name: "CircularProgress",
      props: {
         color: {
            type: "choice",
            options: [
               "inherit",
               "primary",
               "secondary",
               "error",
               "info",
               "success",
               "warning",
            ],
         },
         disableShrink: "boolean",
         size: "string",
         sx: "object",
         thinkness: "number",
         value: "number",
         variant: {
            type: "choice",
            options: ["determinate", "indeterminate"],
            defaultValue: "indeterminate",
         },
      },
      styleSections: ["visibility"],
   };

export const LINEAR_PROGRESS_META: CodeComponentMeta<LinearProgressProps> = {
   name: "LinearProgress",
   props: {
      color: {
         type: "choice",
         options: ["inherit", "primary", "secondary"],
      },
      sx: "object",
      value: "number",
      valueBuffer: "number",
      variant: {
         type: "choice",
         options: ["buffer", "determinate", "indeterminate", "query"],
         defaultValue: "indeterminate",
      },
   },
   styleSections: ["visibility"],
};
