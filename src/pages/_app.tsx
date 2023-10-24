import { AppProps } from "next/app";
import ThemeProvider from "@/theme/ThemeProvider";
import { Toaster } from "sonner";
import styles from "@/components/Toaster/Toaster.module.css";

export default function CustomApp({ Component, pageProps }: AppProps) {
   return (
      // The data from each page's `getStaticProps` are in `pageProps`.
      <ThemeProvider>
         <Component {...pageProps} />
         <Toaster closeButton toastOptions={{ className: styles.toast }} />
      </ThemeProvider>
   );
}
