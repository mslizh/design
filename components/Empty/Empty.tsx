import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { EmptyImage } from "@/components/Empty";

interface EmptyProps {
  img?: string;
  message: string;
}

export function Empty(props: EmptyProps) {
  const { img, message } = props;

  return (
    <Stack alignItems="center" spacing={2} p={4} overflow="hidden">
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
