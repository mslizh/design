import List from "@mui/material/List";
import { Empty } from "@/components/Empty";
import { FileListItem } from "@/components/FileListItem";

interface FileListProps {
  files: File[] | undefined;
}

export function FileList(props: FileListProps): JSX.Element {
  const { files } = props;
  return (
    <List sx={{ overflow: "hidden" }}>
      {files ? (
        files.map((file, index) => <FileListItem key={index} file={file} />)
      ) : (
        <Empty message="Нет файлов" />
      )}
    </List>
  );
}
