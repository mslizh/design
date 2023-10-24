import { styled } from "@mui/material/styles";
import {
   Avatar as MuiAvatar,
   AvatarGroup as MuiAvatarGroup,
   AvatarProps as MuiAvatarProps,
   AvatarGroupProps as MuiAvatarGroupProps,
} from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";

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

export const AVATAR_META: CodeComponentMeta<AvatarProps> = {
   name: "Avatar",
   props: {
      children: { type: "slot", hidePlaceholder: true },
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
   styleSections: ["visibility"],
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
   styleSections: ["visibility"],
};
