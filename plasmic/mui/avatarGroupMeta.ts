import { AvatarGroupProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const avatarGroupMeta: CodeComponentMeta<AvatarGroupProps> = {
  name: "AvatarGroup",
  props: {
    children: "slot",
    max: "number",
    spacing: "string",
    total: "number",
    variant: {
      type: "choice",
      options: ["circular", "rounded", "square"]
    }
  },
  importPath: "@mui/material"
}