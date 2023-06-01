import { CodeComponentMeta } from "@plasmicapp/host";
import { EmptyProps } from "@/components/Empty";

export const emptyMeta: CodeComponentMeta<EmptyProps> = {
  name: "Empty",
  props: {
    img: "string",
    message: "string",
  },
  importPath: "@/components/Empty",
};
