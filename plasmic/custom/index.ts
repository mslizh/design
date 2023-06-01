import { registerComponent } from "@plasmicapp/host";
import { Empty } from "@/components/Empty";
import { FileCard } from "@/components/FileCard";
import { FileGrid } from "@/components/FileGrid";
import { emptyMeta } from "@/plasmic/custom/emptyMeta";
import { fileCardMeta } from "@/plasmic/custom/fileCardMeta";
import { fileGridMeta } from "@/plasmic/custom/fileGridMeta";

export function registerCustomComponents() {
  registerComponent(Empty, emptyMeta);
  registerComponent(FileCard, fileCardMeta);
  registerComponent(FileGrid, fileGridMeta);
}
