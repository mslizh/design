import { PaletteOptions, Theme, createTheme } from "@mui/material/styles";
import { registerToken } from "@plasmicapp/host";
import { get } from "lodash";
import { Icon } from "@/components/Icon";
import { Paper } from "@mui/material";

export const theme = createTheme({
   palette: {
      common: {
         black: "rgba(17, 24, 39)",
      },
      primary: {
         main: "rgba(249, 115, 22)",
         light: "rgba(253, 186, 116)",
         dark: "rgba(234, 88, 12)",
         contrastText: "rgba(255, 255, 255)",
      },
      secondary: {
         main: "rgba(107, 114, 128)",
         light: "rgba(209, 213, 219)",
         dark: "rgba(75, 85, 99)",
         contrastText: "rgba(255, 255, 255)",
      },
      error: {
         main: "rgba(239, 68, 68)",
         light: "rgba(252, 165, 165)",
         dark: "rgba(220, 38, 38)",
         contrastText: "rgba(255, 255, 255)",
      },
      success: {
         main: "rgba(34, 197, 94)",
         light: "rgba(134, 239, 172)",
         dark: "rgba(22, 163, 74)",
         contrastText: "rgba(255, 255, 255)",
      },
      warning: {
         main: "rgba(255, 195, 0)",
         light: "rgba(255, 215, 67)",
         dark: "rgba(255, 181, 0)",
         contrastText: "rgba(255, 255, 255)",
      },
      info: {
         main: "rgba(59, 130, 246)",
         light: "rgba(147, 197, 253)",
         dark: "rgba(37, 99, 235)",
         contrastText: "rgba(255, 255, 255)",
      },
      text: {
         primary: "rgba(17, 24, 39)",
         secondary: "rgba(107, 114, 128)",
         disabled: "rgba(209, 213, 219)",
      },
      divider: "rgba(229, 231, 235)",
      background: {
         default: "rgba(249, 250, 251)",
      },
      action: {
         active: "rgba(17, 24, 39, 0.54)",
         hover: "rgba(17, 24, 39, 0.04)",
         selected: "rgba(17, 24, 39, 0.08)",
         disabled: "rgba(17, 24, 39, 0.26)",
         disabledBackground: "rgba(17, 24, 39, 0.12)",
         focus: "rgba(17, 24, 39, 0.12)",
      },
   },
   shadows: [
      "none", // 0
      "0px 1px 2px 0px rgba(17, 24, 39,0.04), 0px 1px 1px 0px rgba(17, 24, 39,0.01), 0px 0.5px 0.5px 0px rgba(17, 24, 39,0.02)", // 1
      "0px -1px 2px 0px rgba(17, 24, 39,0.04), 0px -1px 1px 0px rgba(17, 24, 39,0.01), 0px -0.5px 0.5px 0px rgba(17, 24, 39,0.02)", // 2
      "0px 1px 3px 0px rgba(17, 24, 39,0.1), 0px 2px 1px 0px rgba(17, 24, 39,0.02), 0px 1px 1px 0px rgba(17, 24, 39,0.04)", // 3
      "0px 1px 5px 0px rgba(17, 24, 39,0.1), 0px 3px 1px 0px rgba(17, 24, 39,0.02), 0px 2px 2px 0px rgba(17, 24, 39,0.04)", // 4
      "0px 1px 8px 0px rgba(17, 24, 39,0.1), 0px 3px 3px 0px rgba(17, 24, 39,0.02), 0px 3px 4px 0px rgba(17, 24, 39,0.04)", // 5
      "0px 2px 4px 0px rgba(17, 24, 39,0.1), 0px 1px 10px 0px rgba(17, 24, 39,0.02), 0px 4px 5px 0px rgba(17, 24, 39,0.04)", // 6
      "0px 3px 5px 0px rgba(17, 24, 39,0.1), 0px 1px 18px 0px rgba(17, 24, 39,0.02),0px 6px 10px 0px rgba(17, 24, 39,0.04)", // 7
      "0px 5px 5px 0px rgba(17, 24, 39,0.1), 0px 3px 14px 0px rgba(17, 24, 39,0.02), 0px 8px 10px 0px rgba(17, 24, 39,0.04)", // 8
      "0px 5px 6px 0px rgba(17, 24, 39,0.1), 0px 3px 16px 0px rgba(17, 24, 39,0.02), 0px 9px 12px 0px rgba(17, 24, 39,0.04)", // 9
      "0px 6px 6px -3px rgba(17, 24, 39,0.2),0px 10px 14px 1px rgba(17, 24, 39,0.14),0px 4px 18px 3px rgba(17, 24, 39,0.12)", // 10
      "0px 6px 7px -4px rgba(17, 24, 39,0.2),0px 11px 15px 1px rgba(17, 24, 39,0.14),0px 4px 20px 3px rgba(17, 24, 39,0.12)", // 11
      "0px 7px 8px 0px rgba(17, 24, 39,0.1), 0px 5px 22px 0px rgba(17, 24, 39,0.02), 0px 12px 17px 0px rgba(17, 24, 39,0.04)", // 12
      "0px 7px 8px -4px rgba(17, 24, 39,0.2),0px 13px 19px 2px rgba(17, 24, 39,0.14),0px 5px 24px 4px rgba(17, 24, 39,0.12)", // 13
      "0px 7px 9px -4px rgba(17, 24, 39,0.2),0px 14px 21px 2px rgba(17, 24, 39,0.14),0px 5px 26px 4px rgba(17, 24, 39,0.12)", // 14
      "0px 8px 9px -5px rgba(17, 24, 39,0.2),0px 15px 22px 2px rgba(17, 24, 39,0.14),0px 6px 28px 5px rgba(17, 24, 39,0.12)", // 15
      "0px 8px 10px 0px rgba(17, 24, 39,0.1), 0px 6px 30px 0px rgba(17, 24, 39,0.02), 0px 16px 24px 0px rgba(17, 24, 39,0.04)", // 16
      "0px 8px 11px -5px rgba(17, 24, 39,0.2),0px 17px 26px 2px rgba(17, 24, 39,0.14),0px 6px 32px 5px rgba(17, 24, 39,0.12)", // 17
      "0px 9px 11px -5px rgba(17, 24, 39,0.2),0px 18px 28px 2px rgba(17, 24, 39,0.14),0px 7px 34px 6px rgba(17, 24, 39,0.12)", // 18
      "0px 9px 12px -6px rgba(17, 24, 39,0.2),0px 19px 29px 2px rgba(17, 24, 39,0.14),0px 7px 36px 6px rgba(17, 24, 39,0.12)", // 19
      "0px 10px 13px -6px rgba(17, 24, 39,0.2),0px 20px 31px 3px rgba(17, 24, 39,0.14),0px 8px 38px 7px rgba(17, 24, 39,0.12)", // 20
      "0px 10px 13px -6px rgba(17, 24, 39,0.2),0px 21px 33px 3px rgba(17, 24, 39,0.14),0px 8px 40px 7px rgba(17, 24, 39,0.12)", // 21
      "0px 10px 14px -6px rgba(17, 24, 39,0.2),0px 22px 35px 3px rgba(17, 24, 39,0.14),0px 8px 42px 7px rgba(17, 24, 39,0.12)", // 22
      "0px 11px 14px -7px rgba(17, 24, 39,0.2),0px 23px 36px 3px rgba(17, 24, 39,0.14),0px 9px 44px 8px rgba(17, 24, 39,0.12)", // 23
      "0px 11px 15px 0px rgba(17, 24, 39,0.1), 0px 9px 46px 0px rgba(17, 24, 39,0.02), 0px 24px 38px 0px rgba(17, 24, 39,0.04)", // 24
   ],
   typography: {
      fontFamily: "Inter",
      h1: {
         fontWeight: 700,
         lineHeight: "120px",
         letterSpacing: 0,
      },
      h2: {
         fontWeight: 700,
         lineHeight: "72px",
         letterSpacing: 0,
      },
      h3: {
         fontWeight: 700,
         lineHeight: "56px",
         letterSpacing: 0,
      },
      h4: {
         fontSize: "32px",
         fontWeight: 700,
         lineHeight: "40px",
         letterSpacing: 0,
      },
      h5: {
         fontWeight: 700,
         lineHeight: "32px",
         letterSpacing: 0,
      },
      h6: {
         fontWeight: 700,
         lineHeight: "32px",
         letterSpacing: 0,
      },
      subtitle1: {
         fontWeight: 600,
         fontSize: "0.875rem",
         lineHeight: "24px",
         letterSpacing: -0.2,
      },
      subtitle2: {
         fontWeight: 600,
         lineHeight: "20px",
         letterSpacing: -0.2,
      },
      body1: {
         fontSize: "0.875rem",
         lineHeight: "1.25rem",
         letterSpacing: -0.2,
      },
      body2: {
         fontSize: "0.875rem",
         lineHeight: "1.25rem",
         letterSpacing: -0.1,
      },
      button: {
         lineHeight: "24px",
         textTransform: "none",
      },
      caption: {
         lineHeight: "16px",
      },
   },
   components: {
      MuiAvatar: {
         styleOverrides: {
            root: ({ theme }) => ({
               ...theme.typography.body1,
               backgroundColor: theme.palette.background.default,
               border: `1px solid ${theme.palette.divider}`,
               color: theme.palette.text.secondary,
            }),
         },
      },

      MuiAvatarGroup: {
         styleOverrides: {
            avatar: ({ theme }) => ({
               border: `1px solid ${theme.palette.divider}`,
               boxSizing: "border-box",
            }),
         },
      },

      MuiAppBar: {
         defaultProps: {
            square: true,
            variant: "outlined" as const,
            color: "inherit",
         },
         styleOverrides: {
            root: {
               borderWidth: 0,
            },
         },
      },

      MuiButton: {
         styleOverrides: {
            root: ({ theme }) => ({
               fontSize: theme.typography.button.fontSize,
            }),
            sizeSmall: ({ theme }) => ({
               paddingLeft: theme.spacing(1),
               paddingRight: theme.spacing(1),
            }),
            sizeMedium: ({ theme }) => ({
               paddingTop: theme.spacing(1),
               paddingBottom: theme.spacing(1),
            }),
            sizeLarge: ({ theme }) => ({
               paddingLeft: theme.spacing(2.5),
               paddingRight: theme.spacing(2.5),
               paddingTop: theme.spacing(1.5),
               paddingBottom: theme.spacing(1.5),
            }),
            startIcon: ({ ownerState }) => ({
               ...((ownerState.size === "small" ||
                  ownerState.size === "large") && {
                  "& > *:nth-of-type(1)": {
                     fontSize: 20,
                  },
               }),
            }),
            endIcon: ({ ownerState }) => ({
               ...((ownerState.size === "small" ||
                  ownerState.size === "large") && {
                  "& > *:nth-of-type(1)": {
                     fontSize: 20,
                  },
               }),
            }),
         },
      },

      MuiCard: {
         defaultProps: {
            variant: "outlined" as const,
         },
      },

      MuiCheckbox: {
         defaultProps: {
            icon: <Icon name="CheckboxUncheckedRegular" />,
            checkedIcon: <Icon name="CheckboxCheckedFilled" />,
            indeterminateIcon: <Icon name="CheckboxIndeterminateRegular" />,
         },
         styleOverrides: {
            root: ({ ownerState, theme }) => ({
               ...(ownerState.size === "medium" && {
                  padding: theme.spacing(0.75),
               }),
               ...(ownerState.size === "small" && {
                  padding: theme.spacing(0.5),
               }),
            }),
         },
      },

      MuiChip: {
         defaultProps: {
            deleteIcon: <Icon name="DismissSquareFilled" />,
         },
         styleOverrides: {
            root: ({ ownerState, theme }) => ({
               ...(ownerState.size === "medium" && {
                  paddingLeft: theme.spacing(2),
                  paddingRight: theme.spacing(2),
                  gap: theme.spacing(0.75),
               }),
               ...(ownerState.size === "small" && {
                  paddingLeft: theme.spacing(1),
                  paddingRight: theme.spacing(1),
                  gap: theme.spacing(0.5),
               }),
               borderRadius: theme.shape.borderRadius,
            }),
            icon: ({ ownerState, theme }) => ({
               ...(ownerState.size === "medium" && {
                  fontSize: 20,
                  marginLeft: theme.spacing(-1),
                  marginRight: "unset",
               }),
               ...(ownerState.size === "small" && {
                  fontSize: 16,
                  marginLeft: theme.spacing(-0.25),
                  marginRight: "unset",
               }),
            }),
            label: ({ theme }) => ({
               padding: "unset",
               display: "flex",
               flexDirection: "row",
               gap: theme.spacing(0.5),
            }),
            deleteIcon: ({ ownerState, theme }) => ({
               ...(ownerState.size === "medium" && {
                  fontSize: 20,
                  marginRight: theme.spacing(-1),
                  marginLeft: "unset",
               }),
               ...(ownerState.size === "small" && {
                  fontSize: 16,
                  marginRight: theme.spacing(-0.25),
                  marginLeft: "unset",
               }),
            }),
            sizeSmall: ({ theme }) => ({
               fontSize: theme.typography.caption.fontSize,
               lineHeight: theme.typography.caption.lineHeight,
            }),
            sizeMedium: ({ theme }) => ({
               fontSize: theme.typography.body1.fontSize,
               lineHeight: theme.typography.body1.lineHeight,
            }),
         },
      },

      MuiDialogActions: {
         styleOverrides: {
            root: ({ theme }) => ({
               padding: theme.spacing(2),
            }),
            spacing: ({ theme }) => ({
               gap: theme.spacing(1),
               "& > :not(:first-of-type)": {
                  margin: 0,
               },
            }),
         },
      },

      MuiDialogContent: {
         styleOverrides: {
            root: ({ theme }) => ({
               padding: theme.spacing(2),
            }),
         },
      },

      MuiDialogTitle: {
         styleOverrides: {
            root: ({ theme }) => ({
               ...theme.typography.subtitle1,
               padding: theme.spacing(1.5, 2),
            }),
         },
      },

      MuiDrawer: {
         styleOverrides: {
            paper: {
               width: "inherit",
            },
         },
      },

      MuiFormControl: {
         styleOverrides: {
            root: ({ theme }) => ({
               gap: theme.spacing(1),
            }),
         },
         defaultProps: {
            variant: "standard",
         },
      },

      MuiFormHelperText: {
         styleOverrides: {
            root: {
               marginLeft: "unset",
               marginRight: "unset",
               marginTop: "unset",
            },
         },
      },

      MuiFormGroup: {
         styleOverrides: {
            root: ({ theme }) => ({
               backgroundColor: theme.palette.background.paper,
               border: `1px solid ${theme.palette.divider}`,
               borderRadius: theme.shape.borderRadius,
            }),
         },
      },

      MuiFormLabel: {
         styleOverrides: {
            root: ({ theme }) => ({
               color: theme.palette.text.primary,
               ...theme.typography.caption,
               fontWeight: theme.typography.fontWeightMedium,
            }),
         },
      },

      MuiIconButton: {
         styleOverrides: {
            root: ({ theme }) => ({
               borderRadius: theme.shape.borderRadius,
            }),
            sizeSmall: ({ theme }) => ({
               padding: theme.spacing(0.75),
            }),
            sizeMedium: ({ theme }) => ({
               padding: theme.spacing(1.25),
            }),
            sizeLarge: ({ theme }) => ({
               padding: theme.spacing(1.75),
            }),
            edgeStart: ({ ownerState, theme }) => ({
               ...(ownerState.size === "small" && {
                  marginLeft: theme.spacing(-0.75),
               }),
               ...(ownerState.size === "medium" && {
                  marginLeft: theme.spacing(-1.25),
               }),
               ...(ownerState.size === "large" && {
                  marginleft: theme.spacing(-1.75),
               }),
            }),
            edgeEnd: ({ ownerState, theme }) => ({
               ...(ownerState.size === "small" && {
                  marginRight: theme.spacing(-0.75),
               }),
               ...(ownerState.size === "medium" && {
                  marginRight: theme.spacing(-1.25),
               }),
               ...(ownerState.size === "large" && {
                  marginRight: theme.spacing(-1.75),
               }),
            }),
         },
      },
    
    MuiInputAdornment: {
      styleOverrides: {
        positionStart: ({ theme }) => ({
          marginRight: 0,
          marginLeft: theme.spacing(2),
        })
      }
    },

      MuiInputBase: {
         styleOverrides: {
            input: {
               textAlign: "inherit",
            },
         },
         variants: [
            {
               props: { size: "large" },
               style: ({ theme }) => ({
                  padding: theme.spacing(0.5, 0),
               }),
            },
         ],
      },

      MuiInputLabel: {
         defaultProps: {
            shrink: true,
         },
         styleOverrides: {
            root: ({ theme }) => ({
               ...theme.typography.caption,
               fontWeight: theme.typography.fontWeightMedium,
               position: "static",
            }),
            outlined: {
               transform: "unset",
            },
         },
      },

      MuiListItem: {
         styleOverrides: {
            root: ({ theme }) => ({
               gap: theme.spacing(2),
               "& .MuiIconButton-edgeStart": {
                  marginRight: theme.spacing(-1),
               },
               "& .MuiIconButton-edgeEnd": {
                  marginLeft: theme.spacing(-1),
               },
            }),
         },
      },

      MuiListItemAvatar: {
         styleOverrides: {
            root: {
               minWidth: "unset",
            },
         },
      },

      MuiListItemButton: {
         styleOverrides: {
            root: ({ theme }) => ({
               gap: theme.spacing(2),
            }),
         },
      },

      MuiListItemIcon: {
         styleOverrides: {
            root: {
               fontSize: 20,
               minWidth: "unset",
            },
         },
      },

      MuiListItemText: {
         styleOverrides: {
            root: ({ theme }) => ({
               marginTop: theme.spacing(0.75),
               marginBottom: theme.spacing(0.75),
            }),
            multiline: ({ theme }) => ({
               marginTop: theme.spacing(-0.25),
               marginBottom: theme.spacing(-0.25),
            }),
         },
         defaultProps: {
            primaryTypographyProps: {
               variant: "body1",
               color: "text.primary",
            },
            secondaryTypographyProps: {
               variant: "caption",
               color: "text.secondary",
            },
         },
      },

      MuiMenuItem: {
         styleOverrides: {
            root: ({ theme }) => ({
               gap: theme.spacing(2),
               paddingBottom: theme.spacing(1.75),
               paddingTop: theme.spacing(1.75),
            }),
         },
      },

      MuiOutlinedInput: {
         defaultProps: {
            notched: false,
         },
         styleOverrides: {
            root: ({ theme }) => ({
               backgroundColor: theme.palette.background.paper,
               "&:hover": {
                  backgroundColor: theme.palette.action.hover,
               },
               "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.divider,
               },
               "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.primary.main,
               },
            }),
            input: ({ theme }) => ({
               padding: theme.spacing(1.25, 2),
            }),
            inputSizeSmall: ({ theme }) => ({
               padding: theme.spacing(0.75, 2),
            }),
            multiline: {
               padding: 0,
            },
            notchedOutline: ({ theme }) => ({
               borderColor: theme.palette.divider,
            }),
         },
      },

      MuiSelect: {
         defaultProps: {
            IconComponent: (props) => (
               <Icon name="ChevronDownRegular" {...props} />
            ),
         },
      },

    MuiSkeleton: {
      defaultProps: {
        animation: "wave"
      }
    },

      MuiSvgIcon: {
         styleOverrides: {
            fontSizeSmall: {
               fontSize: 16,
            },
            fontSizeMedium: {
               fontSize: 20,
            },
            fontSizeLarge: {
               fontSize: 24,
            },
         },
      },

      MuiTableCell: {
         styleOverrides: {
            root: ({ theme }) => ({
               borderBottom: `1px solid ${theme.palette.divider}`,
            }),
            sizeSmall: ({ theme }) => ({
               padding: theme.spacing(0.75),
            }),
            sizeMedium: ({ theme }) => ({
               padding: theme.spacing(1.25),
            }),
         },
         variants: [
            {
               props: { size: "large" },
               style: ({ theme }) => ({
                  padding: theme.spacing(1.75),
               }),
            },
         ],
      },

      MuiTableRow: {
         styleOverrides: {
            root: {
               "&:last-child td, &:last-child th": { border: 0 },
            },
         },
      },

      MuiToggleButton: {
         styleOverrides: {
            sizeSmall: ({ theme }) => ({
               padding: theme.spacing(0.625),
            }),
            sizeMedium: ({ theme }) => ({
               padding: theme.spacing(1.125),
               gap: theme.spacing(1),
            }),
            sizeLarge: ({ theme }) => ({
               padding: theme.spacing(1.625),
            }),
         },
      },

      MuiToolbar: {
         styleOverrides: {
            root: ({ theme }) => ({
               gap: theme.spacing(1),
               [theme.breakpoints.up("xs")]: {
                  minHeight: theme.spacing(6),
               },
            }),
            gutters: ({ theme }) => ({
               [theme.breakpoints.up("xs")]: {
                  paddingLeft: theme.spacing(2),
                  paddingRight: theme.spacing(2),
               },
            }),
         },
      },

      MuiTooltip: {
         styleOverrides: {
            tooltip: ({ theme }) => ({
               backgroundColor: theme.palette.background.paper,
               boxShadow: theme.shadows[6],
               color: theme.palette.text.secondary,
               padding: theme.spacing(0.75, 1.5),
               border: `1px solid ${theme.palette.divider}`,
               display: "flex",
               alignItems: "center",
               gap: theme.spacing(1),
               minHeight: 32,
               ...theme.typography.caption,
            }),
         },
      },
   },
});

export function registerTokens(theme: Theme) {
   const palette = theme.palette;
   Object.keys(palette).map((key) => {
      registerTokenFromPalette(palette, key);
   });
}

function registerTokenFromPalette(palette: PaletteOptions, key: string) {
   const token = get(palette, key); // Object or string

   if (token !== undefined && key !== "mode") {
      if (typeof token === "string") {
         registerToken({
            name: `${key}`,
            displayName: `${key}`,
            value: token,
            type: "color",
         });
      }

      if (typeof token === "object") {
         Object.keys(token).map((value) => {
            if (typeof token[value] === "string") {
               registerToken({
                  name: `${key}.${value}`,
                  displayName: `${key}.${value}`,
                  value: token[value],
                  type: "color",
               });
            }

            if (typeof token[value] === "number") {
               registerToken({
                  name: `${value}`,
                  displayName: `${value}`,
                  value: `${token[value] * 100}%`,
                  type: "opacity",
               });
            }
         });
      }
   }
}
