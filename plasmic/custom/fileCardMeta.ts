import { CodeComponentMeta } from "@plasmicapp/host";
import { FileCardProps } from "@/components/FileCard";

export const fileCardMeta: CodeComponentMeta<FileCardProps> = {
  name: "FileCard",
  props: {
    type: "string",
    name: "string",
    lastModified: "number",
    webkitRelativePath: "string",
  },
  importPath: "@/components/FileCard",
};
