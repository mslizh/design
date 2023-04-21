import "../styles/globals.css";
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import Head from "next/head";
import useTheme from "@/styles/useTheme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

function MyApp({ Component, pageProps }) {
  const theme = useTheme();

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
