import {
   BottomNavigationActionProps,
   BottomNavigationProps,
} from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";

export const BOTTOM_NAVIGATION_META: CodeComponentMeta<BottomNavigationProps> =
   {
      name: "BottomNavigation",
      props: {
         children: "slot",
         showLabels: "boolean",
         sx: "object",
         value: "string",
      },
      styleSections: ["visibility"],
   };

export const BOTTOM_NAVIGATION_ACTION_META: CodeComponentMeta<BottomNavigationActionProps> =
   {
      name: "BottomNavigationAction",
      props: {
         icon: "slot",
         label: "string",
         showLabel: "boolean",
         sx: "object",
         value: "string",
         onClick: {
            type: "eventHandler",
            argTypes: [],
         },
      },
   };
