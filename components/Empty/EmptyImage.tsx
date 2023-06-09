import { useTheme } from "@mui/material";

export function EmptyImage() {
  const theme = useTheme();

  return (
    <svg
      width="256"
      height="68"
      viewBox="0 0 256 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="16.5"
        y="12.5"
        width="223"
        height="55"
        rx="3.5"
        fill={theme.palette.background.paper}
      />
      <rect
        x="16.5"
        y="12.5"
        width="223"
        height="55"
        rx="3.5"
        stroke={theme.palette.divider}
      />
      <rect
        x="8.5"
        y="6.5"
        width="239"
        height="55"
        rx="3.5"
        fill={theme.palette.background.paper}
      />
      <rect
        x="8.5"
        y="6.5"
        width="239"
        height="55"
        rx="3.5"
        stroke={theme.palette.divider}
      />
      <rect
        x="0.5"
        y="0.5"
        width="255"
        height="55"
        rx="3.5"
        fill={theme.palette.background.paper}
      />
      <rect
        x="60"
        y="16"
        width="172"
        height="8"
        rx="4"
        fill={theme.palette.divider}
      />
      <rect
        x="60"
        y="32"
        width="130"
        height="8"
        rx="4"
        fill={theme.palette.divider}
      />
      <rect
        x="16"
        y="14"
        width="28"
        height="28"
        rx="14"
        fill={theme.palette.divider}
      />
      <rect
        x="0.5"
        y="0.5"
        width="255"
        height="55"
        rx="3.5"
        stroke={theme.palette.divider}
      />
    </svg>
  );
}
