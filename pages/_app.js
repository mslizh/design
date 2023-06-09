import React from "react";
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import { Toaster } from "sonner";
import styles from "../components/Toaster/Toaster.module.css";
import { theme } from "@/styles/theme";

function MyApp({ Component, pageProps }) {
   return (
      <ThemeProvider theme={theme}>
         <PlasmicRootProvider Head={Head}>
            <Component {...pageProps} />
            <Toaster closeButton toastOptions={{ className: styles.toast }} />
            <CssBaseline />
         </PlasmicRootProvider>
      </ThemeProvider>
   );
}

export default MyApp;
