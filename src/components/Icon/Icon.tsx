import * as FluentIcon from "@fluentui/react-icons";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import React from "react";

export interface IconProps extends SvgIconProps {
   title: string;
   variant: "Regular" | "Filled";
}

export function Icon(props: IconProps) {
   const { title = "Add", variant = "Regular" } = props;

   const IconRoot = FluentIcon[
      (title + variant) as keyof typeof FluentIcon
   ] as React.ElementType;

   return <SvgIcon component={IconRoot} {...props} />;
}
