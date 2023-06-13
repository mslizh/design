import { CodeComponentMeta } from "@plasmicapp/host";
import { SvgIconProps } from "@mui/material/SvgIcon";

export const iconMeta: CodeComponentMeta<SvgIconProps> = {
  name: "Icon",
  props: {
    name: {
      type: "string",
      defaultValue: "AddRegular",
      description:
          "Найти название иконки можно на https://github.com/microsoft/fluentui-system-icons/blob/main/icons_regular.md",
    },
    color: {
      type: "choice",
      options: [
        "action",
        "disabled",
        "primary",
        "error",
        "info",
        "success",
        "warning"
      ]
    },
    fontSize: {
      type: "choice",
      options: [
        "inherit",
        "large",
        "medium",
        "small"
      ]
    },
    sx: "object"
  },
  importPath: "@/components/Icon"
}