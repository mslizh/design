import React from "react";
import { PlasmicCanvasHost } from "@plasmicapp/host";
import { getTheme, registerColors } from "@/styles";
import { registerComponents } from "@/components";

registerColors(getTheme());
registerComponents();

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
