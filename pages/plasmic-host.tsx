import React, { useEffect } from "react";
import { PlasmicCanvasHost } from "@plasmicapp/host";
import { registerTokens } from "@/styles/theme";
import { registerAll } from "@/components";
import { registerMuiComponents } from "@/plasmic/mui";
import { registerSonnerComponents } from "@/plasmic/sonner";
import { useTheme } from "@mui/material";

export default function PlasmicHost() {
   const theme = useTheme();

   useEffect(() => {
      registerTokens(theme);
      registerAll();
      registerMuiComponents();
      registerSonnerComponents();
   }, []);

   return <PlasmicCanvasHost />;
}
