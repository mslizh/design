// Only for Plasmic
// Do not implement in code

import React from "react";
import { ExternalToast, toast } from "sonner";

type Data = ExternalToast & {
   loading: string | React.ReactNode;
   success:
      | string
      | React.ReactNode
      | ((data: any) => React.ReactNode | string);
   error: string | React.ReactNode | ((error: any) => React.ReactNode | string);
};

export interface WithToastProps {
   children?: React.ReactNode;
   variant?: "default" | "success" | "error" | "promise";
   message?: React.ReactNode;
   data?: Data;
   promise?: Promise<any> | (() => Promise<any>);
}

export function WithToast(props: WithToastProps) {
   const { children, variant, message, data, promise } = props;

   function handleClick() {
      if (variant === "success") {
         toast.success(message, data);
      }
      if (variant === "error") {
         toast.error(message, data);
      }
      if (variant === "promise") {
         promise && toast.promise(promise, data);
      }
      if (variant === "default") {
         toast(message, data);
      }
   }

   return <div onClick={handleClick}>{children}</div>;
}
