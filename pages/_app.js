import React from "react";
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import Head from "next/head";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import { getTheme } from "@/styles/theme";
import { ThemeProvider } from "@mui/material";
import { Toaster } from "sonner";
import styles from "../components/Toaster/Toaster.module.css";

const events = [
  {
    start_date: "2023-04-26 6:00",
    end_date: "2023-04-26 10:00",
    text: "test",
    id: 1,
  },
];

function MyApp({ Component, pageProps }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = getTheme(prefersDarkMode ? "dark" : "light");

  return (
    <ThemeProvider theme={theme}>
      <PlasmicRootProvider Head={Head}>
        <Component {...pageProps} />
        <Toaster closeButton toastOptions={{className: styles.toast}}/>
        <CssBaseline />
      </PlasmicRootProvider>
    </ThemeProvider>
  );
}

export default MyApp;
