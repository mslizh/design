import React from "react";
import { registerComponent } from "@plasmicapp/host";
import { toast } from "sonner";

interface Toast {
   children?: JSX.Element;
   title?: string;
   description?: string;
   variant?: "default" | "success" | "error" | "promise";
   loadingTitle?: string;
   successTitle?: string;
   errorTitle?: string;
   promiseResult?: string;
}

export function Toaster(props: Toast) {
   const {
      children,
      title,
      description,
      variant,
      loadingTitle,
      successTitle,
      errorTitle,
      promiseResult,
   } = props;
   const promiseResolve = () =>
      new Promise((resolve) => setTimeout(resolve, 3000));
   const promiseReject = () =>
      new Promise((resolve, reject) => setTimeout(reject, 3000));

   return (
      <div
         onClick={() => {
            if (variant === "default") {
               toast.message(title, {
                  description: description,
               });
            }
            if (variant === "success") {
               toast.success(title, {
                  description: description,
               });
            }
            if (variant === "error") {
               toast.error(title, {
                  description: description,
               });
            }
            if (variant === "promise" && promiseResult === "resolve") {
               toast.promise(promiseResolve, {
                  loading: loadingTitle,
                  success: successTitle,
                  error: errorTitle,
               });
            }
            if (variant === "promise" && promiseResult === "reject") {
               toast.promise(promiseReject, {
                  loading: loadingTitle,
                  success: successTitle,
                  error: errorTitle,
               });
            }
         }}
      >
         {children}
      </div>
   );
}

export function registerToaster() {
   registerComponent(Toaster, {
      name: "Toaster",
      isAttachment: true,
      styleSections: false,
      props: {
         children: "slot",
         variant: {
            type: "choice",
            options: ["default", "success", "error", "promise"],
            defaultValue: "default",
         },
         title: {
            type: "string",
            hidden: (props) => props.variant === "promise",
         },
         description: {
            type: "string",
            hidden: (props) => props.variant === "promise",
         },
         loadingTitle: {
            type: "string",
            hidden: (props) => !(props.variant === "promise"),
         },
         successTitle: {
            type: "string",
            hidden: (props) => !(props.variant === "promise"),
         },
         errorTitle: {
            type: "string",
            hidden: (props) => !(props.variant === "promise"),
         },
         promiseResult: {
            type: "choice",
            options: ["resolve", "reject"],
            defaultValue: "resolve",
            hidden: (props) => !(props.variant === "promise"),
         },
      },
      importPath: "@/components/Toaster",
   });
}
