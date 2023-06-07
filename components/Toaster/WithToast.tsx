import React from "react";
import { ExternalToast, toast } from "sonner";

export interface WithToastProps {
   children?: React.ReactNode;
   variant?: "default" | "success" | "error";
   message?: React.ReactNode;
   data?: ExternalToast;
}

export function WithToast(props: WithToastProps) {
   const { children, variant, message, data } = props;

   async function handleClick() {
      if (variant === "success") {
         toast.success(message, data);
      }
      if (variant === "error") {
         toast.error(message, data);
      }
      if (variant === "default") {
         toast(message, data);
      }
   }

   return <div onClick={handleClick}>{children}</div>;
}
