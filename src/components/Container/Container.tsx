import { ContainerProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";

export const CONTAINER_META: CodeComponentMeta<ContainerProps> = {
   name: "Container",
   props: {
      children: "slot",
      fixed: "boolean",
      disableGutters: "boolean",
   },
   styleSections: ["visibility"],
};
