import Grid from "@mui/material/Grid";
import { Empty } from "@/components/Empty";
import { FileCard } from "@/components/FileCard";

interface FileGridProps {
  files: File[] | undefined;
}

export function FileGrid(props: FileGridProps): JSX.Element {
  const { files } = props;
  return files ? (
    <Grid container p={2} spacing={2}>
      {files.map((file, index) => (
        <Grid item xs={6}>
          <FileCard key={index} file={file} />
        </Grid>
      ))}
    </Grid>
  ) : (
    <Empty message="Нет файлов" />
  );
}
