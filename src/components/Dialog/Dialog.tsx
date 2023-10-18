import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";
import {
   DialogActionsProps,
   DialogContentProps,
   DialogContentTextProps,
   DialogProps,
   DialogTitle as MuiDialogTitle,
   DialogTitleProps as MuiDialogTitleProps,
   IconButton,
} from "@mui/material";
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

export const DIALOG_ACTIONS_META: CodeComponentMeta<DialogActionsProps> = {
   name: "DialogActions",
   props: {
      children: "slot",
      disableSpacing: "boolean",
      sx: "object",
   },
   styleSections: ["visibility"],
};

export const DIALOG_CONTENT_META: CodeComponentMeta<DialogContentProps> = {
   name: "DialogContent",
   props: {
      children: "slot",
      dividers: "boolean",
      sx: "object",
   },
   styleSections: ["visibility"],
};

export const DIALOG_CONTENT_TEXT_META: CodeComponentMeta<DialogContentTextProps> =
   {
      name: "DialogContentText",
      props: {
         children: "slot",
         sx: "object",
      },
      styleSections: ["visibility"],
   };

export const DIALOG_META: CodeComponentMeta<DialogProps> = {
   name: "Dialog",
   props: {
      open: {
         type: "boolean",
         defaultValue: false,
      },
      children: "slot",
      fullScreen: "boolean",
      fullWidth: "boolean",
      maxWidth: {
         type: "choice",
         options: ["xs", "sm", "md", "lg", "xl"],
      },
      onClose: {
         type: "eventHandler",
         argTypes: [],
      },
      scroll: {
         type: "choice",
         options: ["body", "paper"],
      },
      sx: "object",
   },
   styleSections: ["visibility"],
};

export const DIALOG_TITLE_META: CodeComponentMeta<DialogTitleProps> = {
   name: "DialogTitle",
   props: {
      children: {
         type: "string",
         defaultValue: "Dialog Title",
      },
      onClose: {
         type: "eventHandler",
         argTypes: [],
      },
      sx: "object",
   },
   styleSections: ["visibility"],
};
