import { TextField } from "@mui/material";

export const inputHelpers = {
   states: {
      value: {
         onChangeArgsToValue: (
            e: Parameters<
               NonNullable<React.ComponentProps<typeof TextField>["onChange"]>
            >[0]
         ) => {
            return e.target.value;
         },
      },
   },
};
