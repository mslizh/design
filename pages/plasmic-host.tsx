import React, { useEffect } from "react";
// import { PlasmicCanvasHost } from "@plasmicapp/host";
// import { registerTokens } from "@/styles/theme";
// import { registerAll } from "@/components";
// import { registerMuiComponents } from "@/plasmic/mui";
// import { registerSonnerComponents } from "@/plasmic/sonner";
// import { useTheme } from "@mui/material";
// import { registerCustomComponents } from "@/plasmic/custom";

import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import { PLASMIC } from '../plasmic/plasmic-init';

export default function PlasmicHost() {
   // const theme = useTheme();

   // useEffect(() => {
   //    registerTokens(theme);
   //    registerAll();
   //    registerMuiComponents();
   //    registerSonnerComponents();
   //    registerCustomComponents();
   // }, []);

   return PLASMIC && <PlasmicCanvasHost />;
}