import MuiCheckbox, {
   CheckboxProps as MuiCheckboxProps,
} from "@mui/material/Checkbox";
import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";

export interface CheckboxProps extends MuiCheckboxProps {
   edge?: "start" | "end";
}

export function Checkbox(props: CheckboxProps) {
   const { edge } = props;

   if (edge === "start") {
      return <MuiCheckbox sx={{ ml: -1, mr: -1 }} {...props} />;
   }
   if (edge === "end") {
      return <MuiCheckbox sx={{ ml: -1, mr: -1 }} {...props} />;
   }

   return <MuiCheckbox {...props} />;
}

export const CHECKBOX_META: CodeComponentMeta<CheckboxProps> = {
   name: "Checkbox",
   props: {
      checked: {
         type: "boolean",
      },
      defaultChecked: {
         type: "boolean",
      },
      onClick: {
         type: "eventHandler",
         argTypes: [],
      },
      indeterminate: "boolean",
      disabled: "boolean",
      disableRipple: "boolean",
      required: "boolean",
      color: {
         type: "choice",
         options: [
            "default",
            "primary",
            "secondary",
            "error",
            "info",
            "success",
            "warning",
         ],
      },
      size: {
         type: "choice",
         options: ["medium", "small"],
      },
      edge: {
         type: "choice",
         options: ["start", "end"],
      },
   },
   styleSections: ["visibility"],
};
