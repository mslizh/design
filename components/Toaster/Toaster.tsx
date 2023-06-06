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
  result?: string;
  persisent?: boolean;
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
    result,
    persisent,
  } = props;
  const promiseSuccess = () =>
    new Promise((resolve) => setTimeout(resolve, 4000));
  const promiseError = () =>
    new Promise((resolve, reject) => setTimeout(reject, 4000));
  const duration = persisent ? Infinity : 4000;

  return (
    <div
      onClick={() => {
        if (variant === "default") {
          toast.message(title, {
            description: description,
            duration: duration,
          });
        }
        if (variant === "success") {
          toast.success(title, {
            description: description,
            duration: duration,
          });
        }
        if (variant === "error") {
          toast.error(title, {
            description: description,
            duration: duration,
          });
        }
        if (variant === "promise" && result === "success") {
          toast.promise(promiseSuccess, {
            loading: loadingTitle,
            success: successTitle,
            error: errorTitle,
            duration: duration,
          });
        }
        if (variant === "promise" && result === "error") {
          toast.promise(promiseError, {
            loading: loadingTitle,
            success: successTitle,
            error: errorTitle,
            duration: duration,
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
      result: {
        type: "choice",
        options: ["success", "error"],
        hidden: (props) => !(props.variant === "promise"),
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
        hidden: (props) => !(props.result === "success"),
      },
      errorTitle: {
        type: "string",
        hidden: (props) => !(props.result === "error"),
      },
      persisent: "boolean",
    },
    importPath: "@/components/Toaster",
  });
}
