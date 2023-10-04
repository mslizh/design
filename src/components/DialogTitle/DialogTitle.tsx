import React from "react";
import MuiDialogTitle, {
   DialogTitleProps as MuiDialogTitleProps,
} from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { Icon } from "@/components/Icon";

export interface DialogTitleProps extends MuiDialogTitleProps {
   onClose?: () => void;
}
//this component was made for implementing close icon button
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
               <Icon title="Dismiss" variant="Regular" />
            </IconButton>
         )}
      </MuiDialogTitle>
   );
}
