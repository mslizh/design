import React from "react";
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import Head from "next/head";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import { getTheme } from "@/styles";
import { ThemeProvider } from "@mui/material";
import { Toaster } from "sonner";

function MyApp({ Component, pageProps }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = getTheme(prefersDarkMode ? "dark" : "light");

  return (
    <ThemeProvider theme={theme}>
      <PlasmicRootProvider Head={Head}>
        <Toaster closeButton />
        <Component {...pageProps} />
        <CssBaseline />
      </PlasmicRootProvider>
    </ThemeProvider>
  );
}

export default MyApp;
