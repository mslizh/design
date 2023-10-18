import { styled } from "@mui/material/styles";
import MuiAvatarGroup, {
   AvatarGroupProps as MuiAvatarGroupProps,
} from "@mui/material/AvatarGroup";
import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";

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
