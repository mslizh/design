import React from "react";
import { registerComponent } from "@plasmicapp/host";
import { toast } from "sonner";

interface Toast {
  children?: JSX.Element;
  message?: string;
}

export function WithToast(props: Toast) {
  const { children, message } = props;

  return <div onClick={() => toast(message)}>{children}</div>;
}

export function registerWithToast() {
  registerComponent(WithToast, {
    name: "WithToast",
    isAttachment: true,
    styleSections: false,
    props: {
      children: "slot",
      message: "string",
    },
    importPath: "@/components/Toaster",
  });
}
