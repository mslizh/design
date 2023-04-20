import useFileUploader from "@/hooks/useFileUploader";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Upload } from "@/components/Upload";
import { FileList } from "@/components/FileList";
import { FileGrid } from "@/components/FileGrid";

interface FileUploader {
  mode?: "list" | "grid";
}

export function FileUploader(props: FileUploader) {
  const { mode = "list" } = props;
  const [files, loading, uploadHandler] = useFileUploader();

  return (
    <Box
      sx={{
        border: 1,
        borderRadius: 1,
        bgcolor: "background.paper",
        borderColor: "divider",
      }}
    >
      <Upload onChange={uploadHandler} />
      <Divider />
      {mode === "list" ? (
        <FileList files={files} />
      ) : (
        <FileGrid files={files} />
      )}
    </Box>
  );
}
