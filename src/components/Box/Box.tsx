import { BoxProps } from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";

export const BOX_META: CodeComponentMeta<BoxProps> = {
   name: "Box",
   props: {
      children: "slot",
      padding: "number",
      margin: "number",
      sx: "object",
   },
};
