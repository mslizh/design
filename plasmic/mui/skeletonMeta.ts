import { SkeletonProps } from "@mui/material/Skeleton";
import { CodeComponentMeta } from "@plasmicapp/host";

export const skeletonMeta: CodeComponentMeta<SkeletonProps> = {
  name: "Skeleton",
  props: {
    animation: {
      type: "choice",
      options: ["pulse", "wave", "false"]
    },
    children: "slot",
    height: "number",
    sx: "object",
    variant: {
      type: "choice",
      options: ["circular", "recetangular", "rounded", "text"]
    },
    width: "object"
  },
  importPath: "@mui/material",
};