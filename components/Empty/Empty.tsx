import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { EmptyImage } from "@/components/Empty";

export interface EmptyProps {
   img?: string;
   message: string;
   className?: string;
}

export function Empty(props: EmptyProps) {
   const { img, message, className } = props;

   return (
      <Stack
         alignItems="center"
         spacing={2}
         p={4}
         overflow="hidden"
         className={className}
      >
         <EmptyImage />
         <Typography
            variant="body2"
            color="text.secondary"
            width="100%"
            maxWidth={320}
            textAlign="center"
            noWrap
         >
            {message}
         </Typography>
      </Stack>
   );
}
