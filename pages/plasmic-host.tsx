import React, { useEffect } from "react";
import { PlasmicCanvasHost } from "@plasmicapp/host";
import { getTheme, registerTokens } from "@/styles/theme";
import { registerComponents } from "@/components/registerComponents";

export default function PlasmicHost() {
  const theme = getTheme();

  useEffect(() => {
    registerTokens(theme);
    registerComponents();
  }, []);

  return <PlasmicCanvasHost />;
}
