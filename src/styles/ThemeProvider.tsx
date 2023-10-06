"use client";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { theme } from "@/styles/theme";
import CssBaseline from "@mui/material/CssBaseline";

type ProvidersProps = {
   children: React.ReactNode;
};

export default function ThemeProvider({ children }: ProvidersProps) {
   return (
      <MuiThemeProvider theme={theme}>
         {children}
         <CssBaseline />
      </MuiThemeProvider>
   );
}
