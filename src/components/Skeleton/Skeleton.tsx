import { SkeletonProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";

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
   styleSections: ["visibility"],
};
