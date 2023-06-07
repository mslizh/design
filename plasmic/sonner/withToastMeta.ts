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
         options: ["default", "success", "error", "promise"],
      },
      message: {
         type: "string",
         hidden: (props) => props.variant === "promise",
      },
      promise: {
         type: "exprEditor",
         data: [],
         hidden: (props) => props.variant !== "promise",
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
            loading: {
               type: "string",
               hidden: (props) => props.variant !== "promise",
            },
            success: {
               type: "string",
               hidden: (props) => props.variant !== "promise",
            },
            error: {
               type: "string",
               hidden: (props) => props.variant !== "promise",
            },
         },
      },
   },
   importPath: "@/components/Toaster",
};
