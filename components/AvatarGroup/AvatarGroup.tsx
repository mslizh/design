import { styled } from "@mui/material";
import MuiAvatarGroup, {
  AvatarGroupProps as MuiAvatarGroupProps,
} from "@mui/material/AvatarGroup";

export interface AvatarGroupProps extends MuiAvatarGroupProps {
  size?: "small" | "medium" | "large";
}

export const AvatarGroup = styled(MuiAvatarGroup, {
  shouldForwardProp: (prop) => prop !== "size",
})<AvatarGroupProps>(({ size, theme }) => ({
  ...(size === "small" && {
    ".MuiAvatarGroup-avatar": {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  }),
  ...(size === "medium" && {
    ".MuiAvatarGroup-avatar": {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
  }),
  ...(size === "large" && {
    ".MuiAvatarGroup-avatar": {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
  }),
}));
