import React from "react";
import { Metadata } from "next";
import ThemeProvider from "@/styles/ThemeProvider";
import { Toaster } from "sonner";
import styles from "@/components/Toaster/Toaster.module.css";

export const metadata: Metadata = {
   title: "Home",
   description: "Welcome to Next.js",
};

export default function RootLayout({
   // Layouts must accept a children prop.
   // This will be populated with nested layouts or pages
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body>
            <ThemeProvider>
               {children}
               <Toaster
                  closeButton
                  toastOptions={{ className: styles.toast }}
               />
            </ThemeProvider>
         </body>
      </html>
   );
}
