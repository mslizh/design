import * as FluentIcon from '@fluentui/react-icons';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { CodeComponentMeta } from '@plasmicapp/loader-nextjs';
import React from 'react';

export interface IconProps extends SvgIconProps {
   title: string;
   variant: 'Regular' | 'Filled';
}

export function Icon(props: IconProps) {
   const { title = 'Add', variant = 'Regular' } = props;

   const IconRoot = FluentIcon[(title + variant) as keyof typeof FluentIcon] as React.ElementType;

   return <SvgIcon component={IconRoot} {...props} />;
}

export const ICON_META: CodeComponentMeta<IconProps> = {
   name: 'Icon',
   props: {
      title: {
         type: 'string',
         defaultValue: 'Add',
         helpText: 'Название иконки FluentUI в PascalCase',
      },
      variant: {
         type: 'choice',
         options: ['Regular', 'Filled'],
         defaultValue: 'Regular',
      },
      color: {
         type: 'choice',
         options: ['action', 'disabled', 'primary', 'error', 'info', 'success', 'warning'],
      },
      fontSize: {
         type: 'choice',
         options: ['inherit', 'large', 'medium', 'small'],
      },
      sx: 'object',
   },
   styleSections: ['visibility'],
};
