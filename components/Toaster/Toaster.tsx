import React from "react";
import { registerComponent } from "@plasmicapp/host";
import { toast } from "sonner";
import { Icon } from "../Icon";

interface Toast {
  children?: JSX.Element;
  message?: string;
}

export function WithToast(props: Toast) {
  const { children, message } = props;

  return (
    <div
      onClick={() =>
        toast.error(message, {
          description:
            "export function WithToast(props: Toast) { export function WithToast(props: Toast) { export function WithToast(props: Toast) { export function WithToast(props: Toast) {",
          icon: <Icon name="ErrorCircle20Filled" />,
          duration: Infinity,
          className: "test",
          style: {
            alignItems: "start",
          },
        })
      }
    >
      {children}
    </div>
  );
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
