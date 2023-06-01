import Grid from "@mui/material/Grid";
import { Empty } from "@/components/Empty";
import { FileCard } from "@/components/FileCard";
import { registerComponent } from "@plasmicapp/host";

export interface FileGridProps {
  files: File[] | undefined;
}

export function FileGrid(props: FileGridProps): JSX.Element {
  const { files } = props;
  return files ? (
    <Grid container p={2} spacing={2}>
      {files.map((file, index) => (
        <Grid item xs={6} key={index}>
          <FileCard file={file} />
        </Grid>
      ))}
    </Grid>
  ) : (
    <Empty message="Нет файлов" />
  );
}
