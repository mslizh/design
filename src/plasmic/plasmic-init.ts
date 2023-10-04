import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server-conditional";

export const PLASMIC = initPlasmicLoader({
   projects: [
      {
         id: process.env.PROJECT_ID as string,
         token: process.env.PROJECT_TOKEN as string,
      },
   ],
   // Fetches the latest revisions, whether or not they were unpublished!
   // Disable for production to ensure you render only published changes.
   preview: true,
});
