import React, { useEffect } from "react";
import { PlasmicCanvasHost } from "@plasmicapp/host";
import { getTheme, registerTokens } from "@/styles/theme";
import { registerAll } from "@/components";
import { registerMuiComponents } from "@/plasmic/registerMuiComponents";

export default function PlasmicHost() {
   const theme = getTheme();

   useEffect(() => {
      registerTokens(theme);
      registerAll();
      registerMuiComponents();
   }, []);

   return <PlasmicCanvasHost />;
}
