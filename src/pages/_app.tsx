import {
   PlasmicComponent,
   PlasmicRootProvider,
} from "@plasmicapp/loader-nextjs";
import { AppProps } from "next/app";
import { Stack } from "@mui/material";
import { PLASMIC } from "../plasmic/plasmic-init";
import ThemeProvider from "@/styles/ThemeProvider";
import { useRouter } from "next/router";

export default function CustomApp({ Component, pageProps }: AppProps) {
   const router = useRouter();

   return (
      // The data from each page's `getStaticProps` are in `pageProps`.
      <ThemeProvider>
         {router.pathname.startsWith("/plasmic-host") ? (
            <Component {...pageProps} />
         ) : (
            <PlasmicRootProvider
               loader={PLASMIC}
               prefetchedData={pageProps.plasmicData}
               prefetchedQueryData={pageProps.queryCache}
            >
               <Stack direction={"row"}>
                  <PlasmicComponent
                     component="Navigation"
                     componentProps={{
                        items: (
                           <PlasmicComponent component="NavigationItemList" />
                        ),
                     }}
                  />
                  <Component {...pageProps} />
               </Stack>
            </PlasmicRootProvider>
         )}
      </ThemeProvider>
   );
}
