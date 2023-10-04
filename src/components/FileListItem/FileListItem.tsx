import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Thumbnail } from "@/components/Thumbnail";

export interface FileListItemProps {
   file: File;
}

export function FileListItem(props: FileListItemProps) {
   const { file } = props;

   return (
      <ListItem disablePadding>
         <ListItemButton sx={{ gap: 2 }}>
            <Thumbnail file={file} width={56} height={56} border />
            <ListItemText
               primary={file.name}
               secondary={file.lastModified}
               sx={{ color: "text.primary" }}
            />
         </ListItemButton>
      </ListItem>
   );
}
