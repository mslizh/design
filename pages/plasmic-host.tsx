import React from "react";
import { PlasmicCanvasHost } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../plasmic/plasmic-init";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Toaster } from "sonner";
import styles from "../components/Toaster/Toaster.module.css";
import { theme } from "@/styles/theme";

export default function PlasmicHost() {
   return (
      PLASMIC && (
         <ThemeProvider theme={theme}>
            <PlasmicCanvasHost />
            <Toaster closeButton toastOptions={{ className: styles.toast }} />
            <CssBaseline />
         </ThemeProvider>
      )
   );
}
