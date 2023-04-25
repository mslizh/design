import { PlasmicRootProvider } from "@plasmicapp/react-web";
import useMediaQuery from "@mui/material/useMediaQuery";
import Head from "next/head";
import { ThemeProvider, createTheme } from "@mui/material";
import { getTheme } from "@/styles";
import CssBaseline from "@mui/material/CssBaseline";

function MyApp({ Component, pageProps }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = getTheme(prefersDarkMode ? "dark" : "light");

  return (
    <ThemeProvider theme={theme}>
      <PlasmicRootProvider Head={Head}>
        <Component {...pageProps} />
        <CssBaseline />
      </PlasmicRootProvider>
    </ThemeProvider>
  );
}

export default MyApp;
