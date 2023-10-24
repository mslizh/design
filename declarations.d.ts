import { InputBasePropsSizeOverrides } from "@mui/material/InputBase";
import { TableCellPropsSizeOverrides } from "@mui/material/TableCell";

declare global {
   interface User {
      id: string;
      firstName: string;
      lastName: string;
      avatar?: string;
   }
}

declare module "@mui/material/InputBase" {
   interface InputBasePropsSizeOverrides {
      large: true;
   }
}

declare module "@mui/material/TableCell" {
   interface TableCellPropsSizeOverrides {
      large: true;
   }
}
