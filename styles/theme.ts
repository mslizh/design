import { PaletteOptions, Theme, createTheme } from "@mui/material/styles";
import { registerToken } from "@plasmicapp/host";
import get from "lodash/get";

export function getTheme(mode?: "light" | "dark") {
  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#F97316",
        light: "#FDBA74",
        dark: "#EA580C",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#333",
      },
      divider: "#E5E7EB",
    },
    components: {
      MuiCard: {
        defaultProps: {
          variant: "outlined" as const,
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            minWidth: "36px",
          },
        },
      },
    },
  });

  return theme;
}

export function registerTokens(theme: Theme) {
  const palette = theme.palette;
  Object.keys(palette).map((key) => {
    registerTokenFromPalette(palette, key);
  });
}

function registerTokenFromPalette(palette: PaletteOptions, key: string) {
  const token = get(palette, key); // Object or string

  if (token !== undefined && key !== "mode") {
    if (typeof token === "string") {
      registerToken({
        name: `${key}`,
        displayName: `${key}`,
        value: token,
        type: "color",
      });
    }

    if (typeof token === "object") {
      Object.keys(token).map((value) => {
        if (typeof token[value] === "string") {
          registerToken({
            name: `${key}.${value}`,
            displayName: `${key}.${value}`,
            value: token[value],
            type: "color",
          });
        }

        if (typeof token[value] === "number") {
          registerToken({
            name: `${value}`,
            displayName: `${value}`,
            value: `${token[value] * 100}%`,
            type: "opacity",
          });
        }
      });
    }
  }
}
