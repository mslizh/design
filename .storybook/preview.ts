import type { Preview } from "@storybook/react";
import { theme } from "../src/theme/theme";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "@/globals.css";

const preview: Preview = {
   parameters: {
      actions: { argTypesRegex: "^on[A-Z].*" },
      controls: {
         matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
         },
      },
   },
};

export const decorators = [
   withThemeFromJSXProvider({
      themes: {
         light: theme,
      },
      defaultTheme: "light",
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline,
   }),
];

export default preview;
