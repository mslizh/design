import { AppProps } from "next/app";
import ThemeProvider from "@/styles/ThemeProvider";

export default function CustomApp({ Component, pageProps }: AppProps) {
   return (
      // The data from each page's `getStaticProps` are in `pageProps`.
      <ThemeProvider>
         <Component {...pageProps} />
      </ThemeProvider>
   );
}
