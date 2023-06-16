import { InputBasePropsSizeOverrides } from "@mui/material/InputBase";

declare module "@mui/material/InputBase" {
   interface InputBasePropsSizeOverrides {
      large: true;
   }
}
