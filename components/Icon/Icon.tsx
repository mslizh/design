import * as FluentIcon from "@fluentui/react-icons";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import React from "react";

export function Icon(props: SvgIconProps) {
  const { name = "AddRegular" } = props;
  const IconRoot = FluentIcon[
    name as keyof typeof FluentIcon
  ] as React.ElementType;
  return <SvgIcon component={IconRoot} {...props} />;
}
