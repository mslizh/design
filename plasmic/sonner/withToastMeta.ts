import { WithToastProps } from "@/components/Toaster";
import { CodeComponentMeta } from "@plasmicapp/host";

export const withToastMeta: CodeComponentMeta<WithToastProps> = {
   name: "WithToast",
   isAttachment: true,
   styleSections: false,
   props: {
      children: "slot",
      variant: {
         type: "choice",
         options: ["default", "success", "error"],
      },
      message: {
         type: "string",
      },
      data: {
         type: "object",
         fields: {
            description: {
               type: "string",
            },
            duration: {
               type: "exprEditor",
               data: [],
            },
            action: {
               type: "object",
               fields: {
                  label: "string",
                  onClick: {
                     type: "eventHandler",
                     argTypes: [],
                  },
               },
            },
         },
      },
   },
   importPath: "@/components/Toaster",
};
