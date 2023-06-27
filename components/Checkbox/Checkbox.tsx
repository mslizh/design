import MuiCheckbox, {
  CheckboxProps as MuiCheckboxProps,
} from "@mui/material/Checkbox";

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
