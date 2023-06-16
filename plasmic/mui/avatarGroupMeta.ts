import { AvatarGroupProps } from "@/components/AvatarGroup";
import { CodeComponentMeta } from "@plasmicapp/host";

export const avatarGroupMeta: CodeComponentMeta<AvatarGroupProps> = {
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
      options: ["circular", "rounded", "square"]
    }
  },
  importPath: "@mui/material"
}