import { CodeComponentMeta } from "@plasmicapp/host";
import { EmptyProps } from "@/components/Empty";

export const emptyMeta: CodeComponentMeta<EmptyProps> = {
   name: "Empty",
   props: {
      img: "string",
      message: {
         type: "string",
         defaultValue: "Нет данных",
      },
   },
   importPath: "@/components/Empty",
};
