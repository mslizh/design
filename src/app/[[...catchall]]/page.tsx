import { PlasmicComponent } from "@plasmicapp/loader-nextjs";
import { notFound } from "next/navigation";
import { PLASMIC } from "@/plasmic/plasmic-init";
import { PlasmicClientRootProvider } from "@/plasmic/plasmic-init-client";

// Use revalidate if you want incremental static regeneration
export const revalidate = 60;

export default async function PlasmicLoaderPage({
   params,
   searchParams,
}: {
   params?: { catchall: string[] | undefined };
   searchParams?: Record<string, string | string[]>;
}) {
   const plasmicComponentData = await fetchPlasmicComponentData(
      params?.catchall
   );
   if (!plasmicComponentData) {
      notFound();
   }

   const { prefetchedData } = plasmicComponentData;
   if (prefetchedData.entryCompMetas.length === 0) {
      notFound();
   }

   const pageMeta = prefetchedData.entryCompMetas[0];
   return (
      <PlasmicClientRootProvider
         prefetchedData={prefetchedData}
         pageParams={pageMeta.params}
         pageQuery={searchParams}
      >
         <div style={{ display: "flex", flexDirection: "row" }}>
            <PlasmicComponent
               component="Navigation"
               componentProps={{
                  items: <PlasmicComponent component="NavigationItemList" />,
               }}
            />
            <PlasmicComponent component={pageMeta.displayName} />
         </div>
      </PlasmicClientRootProvider>
   );
}

async function fetchPlasmicComponentData(catchall: string[] | undefined) {
   const plasmicPath = "/" + (catchall ? catchall.join("/") : "");
   const prefetchedData = await PLASMIC.maybeFetchComponentData(
      plasmicPath,
      "Navigation",
      "NavigationItemList"
   );
   if (!prefetchedData) {
      notFound();
   }

   return { prefetchedData };
}

export async function generateStaticParams() {
   const pageModules = await PLASMIC.fetchPages();
   return pageModules.map((mod) => {
      const catchall =
         mod.path === "/" ? undefined : mod.path.substring(1).split("/");
      return {
         catchall,
      };
   });
}
