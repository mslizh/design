import { WithToast } from "@/components/Toaster";
import { registerComponent } from "@plasmicapp/host";
import { withToastMeta } from "./withToastMeta";

export function registerSonnerComponents() {
   registerComponent(WithToast, withToastMeta);
}
