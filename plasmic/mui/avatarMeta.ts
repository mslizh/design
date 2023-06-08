import { AvatarProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/host";

export const avatarMeta: CodeComponentMeta<AvatarProps> = {
  name: "Avatar",
  props: {
    children: "slot",
    variant: {
      type: "choice",
      options: ["circular", "rounded", "square"]
    },
    src: "imageUrl",
    alt: "string",
    sx: "object"
  },
  importPath: "@mui/material"
}