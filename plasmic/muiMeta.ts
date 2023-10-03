import { AvatarGroupProps, AvatarProps, DialogTitleProps } from "@/components";
import {
   AppBarProps,
   BadgeProps,
   BoxProps,
   ButtonGroupProps,
   ButtonProps,
   CardActionAreaProps,
   CardActionsProps,
   CardContentProps,
   CardHeaderProps,
   CardMediaProps,
   CardProps,
   CheckboxProps,
   ChipProps,
   CircularProgressProps,
   ContainerProps,
   DialogActionsProps,
   DialogContentProps,
   DialogContentTextProps,
   DialogProps,
   DividerProps,
   DrawerProps,
   FormControlLabelProps,
   FormControlProps,
   FormGroupProps,
   FormHelperTextProps,
   FormLabelProps,
   GridProps,
   IconButtonProps,
   InputAdornmentProps,
   InputBaseProps,
   LinearProgressProps,
   ListItemAvatarProps,
   ListItemButtonProps,
   ListItemIconProps,
   ListItemProps,
   ListItemTextProps,
   ListProps,
   ListSubheaderProps,
   MenuItemProps,
   OutlinedInputProps,
   PaperProps,
   SkeletonProps,
   StackProps,
   SvgIconProps,
   TableBodyProps,
   TableCellProps,
   TableContainerProps,
   TableFooterProps,
   TableHeadProps,
   TableProps,
   TableRowProps,
   TextFieldProps,
   ToggleButtonGroupProps,
   ToggleButtonProps,
   ToolbarProps,
   TooltipProps,
   TypographyProps,
} from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";

const COMMON_META = { styleSections: false };

export const APP_BAR_META: CodeComponentMeta<AppBarProps> = {
   name: "AppBar",
   props: {
      children: "slot",
      color: {
         type: "choice",
         options: ["default", "inherit", "primary", "secondary", "transparent"],
      },
      enableColorOnDark: "boolean",
      position: {
         type: "choice",
         options: ["absolute", "fixed", "relative", "static", "sticky"],
         defaultValue: "fixed",
      },
      elevation: {
         type: "number",
         helpText: "от 0 до 24",
      },
      square: "boolean",
      variant: {
         type: "choice",
         options: ["elevation", "outlined"],
      },
      sx: "object",
   },
   ...COMMON_META,
};

export const AVATAR_GROUP_META: CodeComponentMeta<AvatarGroupProps> = {
   name: "AvatarGroup",
   props: {
      children: "slot",
      max: "number",
      size: {
         type: "choice",
         options: ["small", "medium", "large"],
      },
      spacing: "string",
      total: "number",
      variant: {
         type: "choice",
         options: ["circular", "rounded", "square"],
      },
   },
   ...COMMON_META,
};

export const AVATAR_META: CodeComponentMeta<AvatarProps> = {
   name: "Avatar",
   props: {
      children: "slot",
      variant: {
         type: "choice",
         options: ["circular", "rounded", "square"],
      },
      size: {
         type: "choice",
         options: ["small", "medium", "large"],
      },
      src: "imageUrl",
      alt: "string",
      sx: "object",
   },
   ...COMMON_META,
};

export const BADGE_META: CodeComponentMeta<BadgeProps> = {
   name: "Badge",
   props: {
      anchorOrigin: {
         type: "object",
         defaultValue: { vertical: "top", horizontal: "right" },
      },
      badgeContent: {
         type: "slot",
         hidePlaceholder: true,
      },
      children: "slot",
      color: {
         type: "choice",
         options: [
            "default",
            "primary",
            "secondary",
            "error",
            "info",
            "success",
            "warning",
         ],
      },
      invisible: "boolean",
      max: {
         type: "number",
         helpText: "Max count to show.",
      },
      showZero: "boolean",
      overlap: {
         type: "choice",
         options: ["circular", "rectangular"],
      },
      variant: {
         type: "choice",
         options: ["dot", "standard"],
      },
      sx: "object",
   },
   ...COMMON_META,
};

export const BOX_META: CodeComponentMeta<BoxProps> = {
   name: "Box",
   props: {
      children: {
         type: "slot",
         hidePlaceholder: true,
      },
      padding: "number",
      margin: "number",
      sx: "object",
   },
   ...COMMON_META,
};

export const BUTTON_GROUP_META: CodeComponentMeta<ButtonGroupProps> = {
   name: "ButtonGroup",
   props: {
      children: "slot",
      variant: {
         type: "choice",
         options: ["contained", "outlined", "text"],
      },
      color: {
         type: "choice",
         options: [
            "inherit",
            "primary",
            "secondary",
            "success",
            "error",
            "info",
            "warning",
         ],
      },
      disabled: "boolean",
      disableElevation: "boolean",
      fullWidth: "boolean",
      orientation: {
         type: "choice",
         options: ["horizontal", "vertical"],
      },
      size: {
         type: "choice",
         options: ["small", "medium", "large"],
      },
   },
   ...COMMON_META,
};

export const BUTTON_META: CodeComponentMeta<ButtonProps> = {
   name: "Button",
   trapsFocus: true,
   props: {
      children: {
         type: "slot",
         // mergeWithParent: true
      },
      color: {
         type: "choice",
         options: [
            "inherit",
            "primary",
            "secondary",
            "success",
            "error",
            "info",
            "warning",
         ],
      },
      disabled: "boolean",
      disableElevation: "boolean",
      fullWidth: "boolean",
      endIcon: {
         type: "slot",
         hidePlaceholder: true,
         // mergeWithParent: true,
      },
      href: "href",
      onClick: {
         type: "eventHandler",
         argTypes: [],
      },
      size: {
         type: "choice",
         options: ["small", "medium", "large"],
      },
      startIcon: {
         type: "slot",
         hidePlaceholder: true,
      },
      variant: {
         type: "choice",
         options: ["contained", "outlined", "text"],
      },
   },
   templates: {
      ["Default"]: {
         props: {
            children: [
               {
                  type: "component",
                  name: "Typography",
               },
            ],
         },
      },
      ["With Start Icon"]: {
         props: {
            startIcon: {
               type: "component",
               name: "Icon",
            },
            children: {
               type: "component",
               name: "Typography",
            },
         },
      },
      ["With End Icon"]: {
         props: {
            endIcon: {
               type: "component",
               name: "Icon",
            },
            children: {
               type: "component",
               name: "Typography",
            },
         },
      },
   },
   ...COMMON_META,
};

export const CARD_ACTION_AREA_META: CodeComponentMeta<CardActionAreaProps> = {
   name: "CardActionArea",
   props: {
      children: "slot",
      onClick: {
         type: "eventHandler",
         argTypes: [],
      },
   },
   ...COMMON_META,
};

export const CARD_ACTIONS_META: CodeComponentMeta<CardActionsProps> = {
   name: "CardActions",
   props: {
      children: "slot",
      disableSpacing: "boolean",
   },
   ...COMMON_META,
};

export const CARD_CONTENT_META: CodeComponentMeta<CardContentProps> = {
   name: "CardContent",
   props: {
      children: "slot",
   },
   ...COMMON_META,
};

export const CARD_HEADER_META: CodeComponentMeta<CardHeaderProps> = {
   name: "CardHeader",
   props: {
      title: "string",
      subheader: "string",
      action: {
         type: "slot",
         hidePlaceholder: true,
      },
      avatar: {
         type: "slot",
         hidePlaceholder: true,
      },
   },
   ...COMMON_META,
};

export const CARD_MEDIA_META: CodeComponentMeta<CardMediaProps> = {
   name: "CardMedia",
   props: {
      children: "slot",
      image: "string",
      src: "string",
   },
   ...COMMON_META,
};

export const CARD_META: CodeComponentMeta<CardProps> = {
   name: "Card",
   props: {
      children: "slot",
      raised: "boolean",
   },
   ...COMMON_META,
};

export const CHECKBOX_META: CodeComponentMeta<CheckboxProps> = {
   name: "Checkbox",
   props: {
      checked: {
         type: "boolean",
      },
      defaultChecked: {
         type: "boolean",
      },
      onClick: {
         type: "eventHandler",
         argTypes: [],
      },
      indeterminate: "boolean",
      disabled: "boolean",
      disableRipple: "boolean",
      required: "boolean",
      color: {
         type: "choice",
         options: [
            "default",
            "primary",
            "secondary",
            "error",
            "info",
            "success",
            "warning",
         ],
      },
      size: {
         type: "choice",
         options: ["medium", "small"],
      },
      edge: {
         type: "choice",
         options: ["start", "end"],
      },
   },
   ...COMMON_META,
};

export const CHIP_META: CodeComponentMeta<ChipProps> = {
   name: "Chip",
   props: {
      variant: {
         type: "choice",
         options: ["filled", "outlined"],
      },
      color: {
         type: "choice",
         options: [
            "default",
            "primary",
            "secondary",
            "error",
            "info",
            "success",
            "warning",
         ],
      },
      size: {
         type: "choice",
         options: ["medium", "small"],
      },
      icon: {
         type: "slot",
         hidePlaceholder: true,
      },
      label: "slot",
      onDelete: {
         type: "eventHandler",
         argTypes: [],
      },
      disabled: "boolean",
      clickable: "boolean",
      sx: "object",
   },
   ...COMMON_META,
};

export const CIRCULAR_PROGRESS_META: CodeComponentMeta<CircularProgressProps> =
   {
      name: "CircularProgress",
      props: {
         color: {
            type: "choice",
            options: [
               "inherit",
               "primary",
               "secondary",
               "error",
               "info",
               "success",
               "warning",
            ],
         },
         disableShrink: "boolean",
         size: "string",
         sx: "object",
         thinkness: "number",
         value: "number",
         variant: {
            type: "choice",
            options: ["determinate", "indeterminate"],
            defaultValue: "indeterminate",
         },
      },
      ...COMMON_META,
   };

export const CONTAINER_META: CodeComponentMeta<ContainerProps> = {
   name: "Container",
   props: {
      children: "slot",
      fixed: "boolean",
      disableGutters: "boolean",
   },
   ...COMMON_META,
};

export const DIALOG_ACTIONS_META: CodeComponentMeta<DialogActionsProps> = {
   name: "DialogActions",
   props: {
      children: "slot",
      disableSpacing: "boolean",
      sx: "object",
   },
   ...COMMON_META,
};

export const DIALOG_CONTENT_META: CodeComponentMeta<DialogContentProps> = {
   name: "DialogContent",
   props: {
      children: "slot",
      dividers: "boolean",
      sx: "object",
   },
   ...COMMON_META,
};

export const DIALOG_CONTENT_TEXT_META: CodeComponentMeta<DialogContentTextProps> =
   {
      name: "DialogContentText",
      props: {
         children: "slot",
         sx: "object",
      },
      ...COMMON_META,
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
   ...COMMON_META,
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
   ...COMMON_META,
};

export const DIVIDER_META: CodeComponentMeta<DividerProps> = {
   name: "Divider",
   props: {
      children: {
         type: "slot",
         hidePlaceholder: true,
      },
      light: "boolean",
      orientation: {
         type: "choice",
         options: ["horizontal", "vertical"],
      },
      textAlign: {
         type: "choice",
         options: ["center", "left", "right"],
      },
      variant: {
         type: "choice",
         options: ["fullWidth", "inset", "middle"],
      },
      component: "string",
      sx: "object",
   },
   ...COMMON_META,
};

export const DRAWER_META: CodeComponentMeta<DrawerProps> = {
   name: "Drawer",
   props: {
      children: "slot",
      anchor: {
         type: "choice",
         options: ["bottom", "left", "right", "top"],
      },
      elevation: "number",
      hideBackdrop: "boolean",
      open: "boolean",
      variant: {
         type: "choice",
         options: ["permanent", "persistent", "temporary"],
      },
      sx: "object",
      PaperProps: {
         type: "object",
         fields: {
            sx: "object",
         },
      },
      onClose: {
         type: "eventHandler",
         argTypes: [
            // { name: "open", type: "boolean" }
         ],
      },
   },
   states: {
      open: {
         type: "writable",
         variableType: "boolean",
         valueProp: "open",
         onChangeProp: "onClose",
         onChangeArgsToValue: (props) => (props.open = false),
      },
   },
   ...COMMON_META,
};

export const FORM_CONTROL_LABEL_META: CodeComponentMeta<FormControlLabelProps> =
   {
      name: "FormControlLabel",
      props: {
         control: "slot",
         value: "string",
         checked: "boolean",
         required: "boolean",
         disabled: "boolean",
         disableTypography: "boolean",
         label: "string",
         labelPlacement: {
            type: "choice",
            options: ["bottom", "end", "start", "top"],
         },
         onChange: {
            type: "eventHandler",
            argTypes: [],
         },
         sx: "object",
      },
      ...COMMON_META,
   };

export const FORM_CONTROL_META: CodeComponentMeta<FormControlProps> = {
   name: "FormControl",
   props: {
      children: "slot",
      color: {
         type: "choice",
         options: [
            "primary",
            "secondary",
            "error",
            "info",
            "success",
            "warning",
         ],
      },
      variant: {
         type: "choice",
         options: ["filled", "outlined", "standard"],
      },
      required: "boolean",
      disabled: "boolean",
      error: "boolean",
      focused: "boolean",
      fullWidth: "boolean",
      margin: {
         type: "choice",
         options: ["none", "dense", "normal"],
      },
      size: {
         type: "choice",
         options: ["medium", "small"],
      },
      sx: "object",
   },
   ...COMMON_META,
};

export const FORM_GROUP: CodeComponentMeta<FormGroupProps> = {
   name: "FormGroup",
   props: {
      children: "slot",
      row: "boolean",
      sx: "object",
   },
   ...COMMON_META,
};

export const FORM_HELPER_TEXT_META: CodeComponentMeta<FormHelperTextProps> = {
   name: "FormHelperText",
   props: {
      children: "string",
      required: "boolean",
      disabled: "boolean",
      error: "boolean",
      focused: "boolean",
      filled: "boolean",
      variant: {
         type: "choice",
         options: ["filled", "outlined", "standard"],
      },
      margin: {
         type: "choice",
         options: ["dense"],
      },
      sx: "object",
   },
   ...COMMON_META,
};

export const FORM_LABEL_META: CodeComponentMeta<FormLabelProps> = {
   name: "FormLabel",
   props: {
      children: "string",
      color: {
         type: "choice",
         options: [
            "error",
            "info",
            "primary",
            "secondary",
            "success",
            "warning",
         ],
      },
      required: "boolean",
      disabled: "boolean",
      error: "boolean",
      focused: "boolean",
      filled: "boolean",
      sx: "object",
   },
   ...COMMON_META,
};

export const GRID_META: CodeComponentMeta<GridProps> = {
   name: "Grid",
   props: {
      children: "slot",
      container: "boolean",
      item: "boolean",
      columns: {
         type: "number",
         hidden: (props) => !props.container,
      },
      xs: {
         type: "number",
         hidden: (props) => !props.item,
      },
      sm: {
         type: "number",
         hidden: (props) => !props.item,
      },
      md: {
         type: "number",
         hidden: (props) => !props.item,
      },
      lg: {
         type: "number",
         hidden: (props) => !props.item,
      },
      xl: {
         type: "number",
         hidden: (props) => !props.item,
      },
      spacing: {
         type: "number",
         hidden: (props) => !props.container,
      },
      rowSpacing: {
         type: "number",
         hidden: (props) => !props.container,
      },
      columnSpacing: {
         type: "number",
         hidden: (props) => !props.container,
      },
      direction: {
         type: "choice",
         options: ["column-reverse", "column", "row-reverse", "row"],
         hidden: (props) => !props.container,
      },
      sx: "object",
   },
   ...COMMON_META,
};

export const ICON_BUTTON_META: CodeComponentMeta<IconButtonProps> = {
   name: "IconButton",
   props: {
      children: "slot",
      color: {
         type: "choice",
         options: [
            "inherit",
            "default",
            "primary",
            "secondary",
            "error",
            "info",
            "success",
            "warning",
         ],
      },
      disabled: "boolean",
      edge: {
         type: "choice",
         options: ["end", "start"],
      },
      size: {
         type: "choice",
         options: ["small", "medium", "large"],
      },
      onClick: {
         type: "eventHandler",
         argTypes: [],
      },
      sx: "object",
   },
   ...COMMON_META,
};

export const ICON_META: CodeComponentMeta<SvgIconProps> = {
   name: "Icon",
   props: {
      title: {
         type: "string",
         defaultValue: "Add",
         helpText:
            "Найти название иконки можно на https://github.com/microsoft/fluentui-system-icons/blob/main/icons_regular.md",
      },
      variant: {
         type: "choice",
         options: ["Regular", "Filled"],
         defaultValue: "Regular",
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
            "warning",
         ],
      },
      fontSize: {
         type: "choice",
         options: ["inherit", "large", "medium", "small"],
      },
      sx: "object",
   },
   ...COMMON_META,
};

export const INPUT_ADORNMENT_META: CodeComponentMeta<InputAdornmentProps> = {
   name: "InputAdornment",
   props: {
      position: {
         type: "choice",
         options: ["start", "end"],
         defaultValue: "start",
      },
      children: "slot",
      disablePointerEvents: "boolean",
      variant: {
         type: "choice",
         options: ["filled", "outlined", "standard"],
         defaultValue: "start",
      },
      sx: "object",
   },
   ...COMMON_META,
};

export const INPUT_BASE_META: CodeComponentMeta<InputBaseProps> = {
   name: "InputBase",
   props: {
      value: "string",
      textAlign: "string",
      placeholder: "string",
      required: "boolean",
      fullWidth: "boolean",
      disabled: "boolean",
      readOnly: "boolean",
      error: "boolean",
      startAdornment: {
         type: "slot",
         hidePlaceholder: true,
      },
      endAdornment: {
         type: "slot",
         hidePlaceholder: true,
      },
      multiline: "boolean",
      rows: "number",
      maxRows: {
         type: "number",
         hidden: (props) => !props.multiline,
      },
      minRows: {
         type: "number",
         hidden: (props) => !props.multiline,
      },
      size: {
         type: "choice",
         options: ["small", "medium", "large"],
      },
      autoComplete: "string",
      autoFocus: "boolean",
      color: {
         type: "choice",
         options: [
            "primary",
            "secondary",
            "error",
            "info",
            "success",
            "warning",
         ],
      },
      defaultValue: "string",
      margin: {
         type: "choice",
         options: ["dense", "none", "normal"],
      },
      id: "string",
      name: "string",
      onBlur: {
         type: "eventHandler",
         argTypes: [],
      },
      onChange: {
         type: "eventHandler",
         argTypes: [
            {
               name: "value",
               type: "string",
            },
         ],
      },
      type: "string",
      sx: "object",
   },
   states: {
      value: {
         type: "writable",
         variableType: "text",
         valueProp: "value",
         onChangeProp: "onChange",
         onChangeArgsToValue: (event) => event.target.value,
      },
   },
   ...COMMON_META,
};

export const LINEAR_PROGRESS_META: CodeComponentMeta<LinearProgressProps> = {
   name: "LinearProgress",
   props: {
      color: {
         type: "choice",
         options: ["inherit", "primary", "secondary"],
      },
      sx: "object",
      value: "number",
      valueBuffer: "number",
      variant: {
         type: "choice",
         options: ["buffer", "determinate", "indeterminate", "query"],
         defaultValue: "indeterminate",
      },
   },
   ...COMMON_META,
};

export const LIST_ITEM_AVATAR_META: CodeComponentMeta<ListItemAvatarProps> = {
   name: "ListItemAvatar",
   props: {
      children: "slot",
      sx: "object",
   },
   parentComponentName: "ListItem",
   ...COMMON_META,
};

export const LIST_ITEM_BUTTON_META: CodeComponentMeta<ListItemButtonProps> = {
   name: "ListItemButton",
   props: {
      children: "slot",
      alignItems: {
         type: "choice",
         options: ["center", "flex-start"],
      },
      autoFocus: "boolean",
      dense: "boolean",
      disabled: "boolean",
      disableGutters: "boolean",
      divider: "boolean",
      selected: "boolean",
      sx: "object",
      onClick: {
         type: "eventHandler",
         argTypes: [],
      },
   },
   parentComponentName: "ListItem",
   ...COMMON_META,
};

export const LIST_ITEM_ICON_META: CodeComponentMeta<ListItemIconProps> = {
   name: "ListItemIcon",
   props: {
      children: "slot",
      sx: "object",
   },
   parentComponentName: "ListItem",
   ...COMMON_META,
};

export const LIST_ITEM_META: CodeComponentMeta<ListItemProps> = {
   name: "ListItem",
   props: {
      children: "slot",
      disableGutters: "boolean",
      disablePadding: "boolean",
      divider: "boolean",
      secondaryAction: {
         type: "slot",
         hidePlaceholder: true,
      },
      dense: "boolean",
      alignItems: {
         type: "choice",
         options: ["center", "flex-start"],
      },
      sx: "object",
   },
   parentComponentName: "List",
   ...COMMON_META,
};

export const LIST_ITEM_TEXT_META: CodeComponentMeta<ListItemTextProps> = {
   name: "ListItemText",
   props: {
      inset: "boolean",
      primary: {
         type: "string",
         defaultValue: "Some text…",
      },
      secondary: "string",
      sx: "object",
   },
   parentComponentName: "ListItem",
   ...COMMON_META,
};

export const LIST_META: CodeComponentMeta<ListProps> = {
   name: "List",
   props: {
      children: "slot",
      subheader: {
         type: "slot",
         hidePlaceholder: true,
      },
      disablePadding: "boolean",
      dense: "boolean",
      sx: "object",
   },
   ...COMMON_META,
};

export const LIST_SUBHEADER_META: CodeComponentMeta<ListSubheaderProps> = {
   name: "ListSubheader",
   props: {
      children: "slot",
      color: {
         type: "choice",
         options: ["default", "inherit", "primary"],
      },
      disableGutters: "boolean",
      disableSticky: "boolean",
      inset: "boolean",
      sx: "object",
   },
   parentComponentName: "List",
   ...COMMON_META,
};

export const MENU_ITEM_META: CodeComponentMeta<MenuItemProps> = {
   name: "MenuItem",
   props: {
      autoFocus: "boolean",
      children: "slot",
      dense: "boolean",
      disableGutters: "boolean",
      divider: "boolean",
      selected: "boolean",
      sx: "object",
      value: "string",
   },
   ...COMMON_META,
};

export const OUTLINED_INPUT_META: CodeComponentMeta<OutlinedInputProps> = {
   name: "OutlinedInput",
   props: {
      startAdornment: {
         type: "slot",
         hidePlaceholder: true,
      },
      endAdornment: {
         type: "slot",
         hidePlaceholder: true,
      },
      value: "string",
      label: "string",
      helperText: "string",
      placeholder: "string",
      required: "boolean",
      fullWidth: "boolean",
      disabled: "boolean",
      error: "boolean",
      multiline: "boolean",
      rows: {
         type: "number",
         hidden: (props) => !props.multiline,
      },
      maxRows: {
         type: "number",
         hidden: (props) => !props.multiline,
      },
      minRows: {
         type: "number",
         hidden: (props) => !props.multiline,
      },
      variant: {
         type: "choice",
         options: ["filled", "outlined", "standard"],
      },
      size: {
         type: "choice",
         options: ["small", "medium", "large"],
      },
      autoComplete: "string",
      autoFocus: "boolean",
      color: {
         type: "choice",
         options: [
            "primary",
            "secondary",
            "error",
            "info",
            "success",
            "warning",
         ],
      },
      defaultValue: "string",
      margin: {
         type: "choice",
         options: ["dense", "none", "normal"],
      },
      id: "string",
      name: "string",
      onChange: {
         type: "eventHandler",
         argTypes: [],
      },
      type: "string",
      sx: "object",
   },
   states: {
      value: {
         type: "writable",
         variableType: "text",
         valueProp: "value",
         onChangeProp: "onChange",
         onChangeArgsToValue: (event) => event.target.value,
      },
   },
   ...COMMON_META,
};

export const PAPER_META: CodeComponentMeta<PaperProps> = {
   name: "Paper",
   props: {
      children: "slot",
      elevation: {
         type: "number",
         helpText: "от 0 до 24",
      },
      square: "boolean",
      variant: {
         type: "choice",
         options: ["elevation", "outlined"],
      },
      sx: "object",
   },
   ...COMMON_META,
};

export const SKELETON_META: CodeComponentMeta<SkeletonProps> = {
   name: "Skeleton",
   props: {
      animation: {
         type: "choice",
         options: ["pulse", "wave", "false"],
      },
      children: "slot",
      height: "number",
      sx: "object",
      variant: {
         type: "choice",
         options: ["circular", "recetangular", "rounded", "text"],
      },
      width: "number",
   },
   ...COMMON_META,
};

export const STACK_META: CodeComponentMeta<StackProps> = {
   name: "Stack",
   props: {
      children: "slot",
      direction: {
         type: "choice",
         options: ["row", "row-reverse", "column", "column-reverse"],
      },
      spacing: {
         type: "number",
         helpText: "Базовое значение 8px.",
      },
      divider: {
         type: "slot",
         hidePlaceholder: true,
      },
      bgcolor: "string",
      border: "string",
      borderColor: "string",
      borderRadius: "string",
      display: "string",
      sx: "object",
   },
   ...COMMON_META,
};

export const TABLE_BODY_META: CodeComponentMeta<TableBodyProps> = {
   name: "TableBody",
   props: {
      children: "slot",
      sx: "object",
   },
   parentComponentName: "Table",
   ...COMMON_META,
};

export const TABLE_CELL_META: CodeComponentMeta<TableCellProps> = {
   name: "TableCell",
   props: {
      align: {
         type: "choice",
         options: ["inherit", "center", "justify", "left", "right"],
      },
      children: "slot",
      padding: {
         type: "choice",
         options: ["checkbox", "none", "normal"],
      },
      size: {
         type: "choice",
         options: ["small", "medium", "large"],
      },
      sortDirection: {
         type: "choice",
         options: ["asc", "desc"],
      },
      sx: "object",
      variant: {
         type: "choice",
         options: ["body", "footer", "head"],
      },
   },
   parentComponentName: "TableRow",
   ...COMMON_META,
};

export const TABLE_CONTAINER_META: CodeComponentMeta<TableContainerProps> = {
   name: "TableContainer",
   props: {
      children: "slot",
      sx: "object",
   },
   ...COMMON_META,
};

export const TABLE_FOOTER_META: CodeComponentMeta<TableFooterProps> = {
   name: "TableFooter",
   props: {
      children: "slot",
      sx: "object",
   },
   parentComponentName: "Table",
   ...COMMON_META,
};

export const TABLE_HEAD_META: CodeComponentMeta<TableHeadProps> = {
   name: "TableHead",
   props: {
      children: "slot",
      sx: "object",
   },
   parentComponentName: "Table",
   ...COMMON_META,
};

export const TABLE_META: CodeComponentMeta<TableProps> = {
   name: "Table",
   props: {
      children: "slot",
      padding: {
         type: "choice",
         options: ["checkbox", "none", "normal"],
      },
      size: {
         type: "choice",
         options: ["small", "medium", "large"],
      },
      stickyHeader: "boolean",
      sx: "object",
   },
   parentComponentName: "TableContainer",
   ...COMMON_META,
};

export const TABLE_ROW_META: CodeComponentMeta<TableRowProps> = {
   name: "TableRow",
   props: {
      children: "slot",
      hover: "boolean",
      selected: "boolean",
      sx: "object",
   },
   parentComponentName: "Table",
   ...COMMON_META,
};

export const TEXT_FIELD_META: CodeComponentMeta<TextFieldProps> = {
   name: "TextField",
   props: {
      autoComplete: "string",
      autoFocus: "boolean",
      children: "slot",
      color: {
         type: "choice",
         options: [
            "primary",
            "secondary",
            "error",
            "info",
            "success",
            "warning",
         ],
      },
      defaultValue: "string",
      disabled: "boolean",
      error: "boolean",
      fullWidth: "boolean",
      helperText: {
         type: "slot",
         hidePlaceholder: true,
      },
      id: "string",
      InputProps: {
         type: "object",
         fields: {
            startAdornment: {
               type: "slot",
            },
         },
      },
      label: {
         type: "slot",
         hidePlaceholder: true,
      },
      margin: {
         type: "choice",
         options: ["dense", "none", "normal"],
      },
      maxRows: {
         type: "number",
         hidden: (props) => !props.multiline,
      },
      minRows: {
         type: "number",
         hidden: (props) => !props.multiline,
      },
      multiline: "boolean",
      name: "string",
      onChange: {
         type: "eventHandler",
         argTypes: [
            {
               name: "value",
               type: "string",
            },
         ],
      },
      placeholder: "string",
      required: "boolean",
      rows: {
         type: "number",
         hidden: (props) => !props.multiline,
      },
      select: "boolean",
      size: {
         type: "choice",
         options: ["small", "medium", "large"],
      },
      sx: "object",
      type: "string",
      value: "string",
      variant: {
         type: "choice",
         options: ["filled", "outlined", "standard"],
      },
   },
   states: {
      value: {
         type: "writable",
         variableType: "text",
         valueProp: "value",
         onChangeProp: "onChange",
         onChangeArgsToValue: (event) => event.target.value,
      },
   },
   ...COMMON_META,
};

export const TOGGLE_BUTTON_META: CodeComponentMeta<ToggleButtonProps> = {
   name: "ToggleButton",
   props: {
      children: "slot",
      value: "string",
      color: {
         type: "choice",
         options: [
            "standard",
            "primary",
            "secondary",
            "error",
            "info",
            "success",
            "warning",
         ],
      },
      fullWidth: "boolean",
      disabled: "boolean",
      selected: "boolean",
      size: {
         type: "choice",
         options: ["small", "medium", "large"],
      },
      onClick: {
         type: "eventHandler",
         argTypes: [],
      },
      onChange: {
         type: "eventHandler",
         argTypes: [],
      },
   },
   ...COMMON_META,
};

export const TOGGLE_BUTTON_GROUP_META: CodeComponentMeta<ToggleButtonGroupProps> =
   {
      name: "ToggleButtonGroup",
      props: {
         children: "slot",
         value: "string",
         color: {
            type: "choice",
            options: [
               "standard",
               "primary",
               "secondary",
               "error",
               "info",
               "success",
               "warning",
            ],
         },
         fullWidth: "boolean",
         orientation: {
            type: "choice",
            options: ["horizontal", "vertical"],
         },
         size: {
            type: "choice",
            options: ["small", "medium", "large"],
         },
         disabled: "boolean",
         exclusive: {
            type: "boolean",
            helpText:
               "If true, only allow one of the child ToggleButton values to be selected.",
         },
         onChange: {
            type: "eventHandler",
            argTypes: [],
         },
         sx: "object",
      },
      ...COMMON_META,
   };

export const TOOLBAR_META: CodeComponentMeta<ToolbarProps> = {
   name: "Toolbar",
   props: {
      children: "slot",
      disableGutters: {
         type: "boolean",
         defaultValue: false,
      },
      variant: {
         type: "choice",
         options: ["dense", "regular"],
         defaultValue: "regular",
      },
      sx: "object",
   },
   ...COMMON_META,
};

export const TOOLTIP_META: CodeComponentMeta<TooltipProps> = {
   name: "Tooltip",
   props: {
      title: "slot",
      children: "slot",
      followCursor: "boolean",
      open: "boolean",
      placement: {
         type: "choice",
         defaultValue: "bottom",
         options: [
            "bottom-end",
            "bottom-start",
            "bottom",
            "left-end",
            "left-start",
            "left",
            "right-end",
            "right-start",
            "right",
            "top-end",
            "top-start",
            "top",
         ],
      },
   },
   ...COMMON_META,
};

export const TYPOGRAPHY_META: CodeComponentMeta<TypographyProps> = {
   name: "Typography",
   props: {
      align: {
         type: "choice",
         options: ["center", "inherit", "justify", "left", "right"],
      },
      children: {
         type: "string",
         defaultValue: "Some text",
      },
      color: "string",
      display: {
         type: "choice",
         options: ["block", "inline-block", "none"],
      },
      gutterBottom: "boolean",
      noWrap: "boolean",
      paragraph: "boolean",
      sx: "object",
      variant: {
         type: "choice",
         options: [
            "inherit",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "overline",
            "subtitle1",
            "subtitle2",
            "body1",
            "body2",
            "button",
            "caption",
         ],
         defaultValue: "inherit",
      },
   },
   ...COMMON_META,
};
