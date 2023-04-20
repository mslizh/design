import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme } from "@mui/material/styles";

export default function useTheme() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  return React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
        components: {
          MuiCard: {
            defaultProps: {
              variant: "outlined",
            },
          },
          MuiListItemIcon: {},
        },
      }),
    [prefersDarkMode]
  );
}
