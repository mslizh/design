import React from "react";
import { PlasmicCanvasHost } from "@plasmicapp/host";
import { getTheme, registerTokens } from "@/styles/theme";
import { registerComponents } from "@/components";

registerTokens(getTheme());
registerComponents();

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
