"use client";
import React from "react";
import { PlasmicCanvasHost } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "@/plasmic/plasmic-init";
import "@/plasmic/plasmic-init-client";
import { Toaster } from "sonner";
import styles from "@/components/Toaster/Toaster.module.css";

export default function PlasmicHost() {
   return (
      PLASMIC && (
         <>
            <PlasmicCanvasHost />
            <Toaster closeButton toastOptions={{ className: styles.toast }} />
         </>
      )
   );
}
