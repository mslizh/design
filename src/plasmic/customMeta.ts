import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";
import {
   EmptyProps,
   FileCardProps,
   FileGridProps,
   FileListProps,
   WithToastProps,
} from "@/components";

export const EMPTY_META: CodeComponentMeta<EmptyProps> = {
   name: "Empty",
   props: {
      img: "string",
      message: {
         type: "string",
         defaultValue: "Нет данных",
      },
   },
};

export const FILE_CARD_META: CodeComponentMeta<FileCardProps> = {
   name: "FileCard",
   props: {
      type: "string",
      name: "string",
      lastModified: "number",
      webkitRelativePath: "string",
   },
};

export const FILE_GRID_META: CodeComponentMeta<FileGridProps> = {
   name: "FileGrid",
   props: {},
};

export const FILE_LIST_META: CodeComponentMeta<FileListProps> = {
   name: "FileList",
   props: {},
};

export const WITH_TOAST_META: CodeComponentMeta<WithToastProps> = {
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
};
