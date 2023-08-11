import React from "react";
import MuiDialogTitle, {
   DialogTitleProps as MuiDialogTitleProps,
} from "@mui/material/DialogTitle";
import { IconButton, useTheme } from "@mui/material";
import { Icon } from "@/components/Icon";

export interface DialogTitleProps extends MuiDialogTitleProps {
   onClose?: () => void;
}

export function DialogTitle(props: DialogTitleProps) {
   const { children, onClose } = props;
   const theme = useTheme();

   return (
      <MuiDialogTitle>
         {children}
         {onClose && (
            <IconButton
               size="small"
               onClick={onClose}
               sx={{
                  position: "absolute",
                  top: theme.spacing(1),
                  right: theme.spacing(1),
               }}
            >
               <Icon title="DismissRegular" />
            </IconButton>
         )}
      </MuiDialogTitle>
   );
}
