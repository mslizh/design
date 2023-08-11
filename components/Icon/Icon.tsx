import * as FluentIcon from "@fluentui/react-icons";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import React from "react";

export interface IconProps extends SvgIconProps {
   title: string;
}

export function Icon(props: IconProps) {
   const { title = "AddRegular" } = props;

   const IconRoot = FluentIcon[
      title as keyof typeof FluentIcon
   ] as React.ElementType;

   return <SvgIcon component={IconRoot} {...props} />;
}
