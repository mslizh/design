import { useState } from "react";

export default function useFileUploader(): [
  File[] | undefined,
  boolean,
  (event: React.ChangeEvent<HTMLInputElement>) => void
] {
  const [files, setFiles] = useState<File[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  function uploadHander(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFiles = event.target.files;
    selectedFiles && console.log(Array.from(selectedFiles));

    if (selectedFiles && selectedFiles.length > 0) {
      setLoading(true);
      setFiles((prev) =>
        selectedFiles
          ? [...Array.from(prev ? prev : []), ...Array.from(selectedFiles)]
          : selectedFiles
      );

      const readers: FileReader[] = [];

      for (let i = 0; i < selectedFiles.length; i++) {
        const reader = new FileReader();

        reader.onload = (event: ProgressEvent<FileReader>) => {
          if (event.target) {
            setLoading(false);
          }
        };

        readers.push(reader);
        reader.readAsDataURL(selectedFiles[i]);
      }
    }
  }

  return [files, loading, uploadHander];
}
