import { styled, useTheme } from "@mui/material";
import MuiAvatar, { AvatarProps as MuiAvatarProps } from "@mui/material/Avatar";

export interface AvatarProps extends MuiAvatarProps {
   size?: "small" | "medium" | "large";
}

export const Avatar = styled(MuiAvatar, {
   shouldForwardProp: (prop) => prop !== "size",
})<AvatarProps>(({ size, theme }) => ({
   ...(size === "small" && {
      width: theme.spacing(4),
      height: theme.spacing(4),
   }),
   ...(size === "medium" && {
      width: theme.spacing(5),
      height: theme.spacing(5),
   }),
   ...(size === "large" && {
      width: theme.spacing(6),
      height: theme.spacing(6),
   }),
}));
