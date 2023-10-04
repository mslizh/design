import { Metadata } from "next";
import ThemeProvider from "@/styles/theme";
import CssBaseline from "@mui/material/CssBaseline";

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
               <CssBaseline />
            </ThemeProvider>
         </body>
      </html>
   );
}
