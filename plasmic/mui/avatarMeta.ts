import { AvatarProps } from "@/components/Avatar";
import { CodeComponentMeta } from "@plasmicapp/host";

export const avatarMeta: CodeComponentMeta<AvatarProps> = {
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
   importPath: "@mui/material",
};
