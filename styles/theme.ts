import { PaletteOptions, Theme, createTheme } from "@mui/material/styles";
import { registerToken } from "@plasmicapp/host";
import get from "lodash/get";

export function getTheme(mode?: "light" | "dark") {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#F97316",
        light: "#FDBA74",
        dark: "#EA580C",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#333333",
      },
    },
    components: {
      MuiCard: {
        defaultProps: {
          variant: "outlined" as const,
        },
      },
      MuiListItemIcon: {},
    },
  });

  return theme;
}

export function registerColors(theme: Theme) {
  const palette = theme.palette;
  Object.keys(palette).map((key) => {
    registerColorFromPalette(palette, key);
  });
}

function registerColorFromPalette(palette: PaletteOptions, key: string) {
  const color = get(palette, key); // Object or string

  if (color !== undefined && key !== "mode") {
    if (typeof color === "string") {
      registerToken({
        name: `${key}`,
        displayName: `${key}`,
        value: color,
        type: "color",
      });
    }

    if (typeof color === "object") {
      Object.keys(color).map((value) => {
        if (typeof color[value] === "string") {
          registerToken({
            name: `${key}.${value}`,
            displayName: `${key}.${value}`,
            value: color[value],
            type: "color",
          });
        }
      });
    }
  }
}
