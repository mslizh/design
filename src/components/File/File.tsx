import {
   Box,
   Button,
   Card,
   CardActionArea,
   CardContent,
   Divider,
   Grid,
   List,
   ListItem,
   ListItemButton,
   ListItemText,
   Stack,
   Typography,
} from "@mui/material";
import { Icon } from "@/components/Icon";
import { Empty } from "@/components/Empty";
import { Thumbnail } from "@/components/Thumbnail";
import useFileUploader from "@/hooks/useFileUploader";
import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";

export interface FileUploaderProps {
   mode?: "list" | "grid";
}

export function FileUploader(props: FileUploaderProps) {
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
         {mode === "list" ? <FileList files={files} /> : <FileGrid files={files} />}
      </Box>
   );
}

export interface UploadProps {
   title?: string;
   caption?: string;
   onChange?: (event: any) => void;
}

export function Upload(props: UploadProps) {
   const {
      title = "Загрузить файл",
      caption = "Максимальный размер файла 25 МБ",
      onChange,
   } = props;

   return (
      <Button component="label" sx={{ p: 2, overflow: "hidden" }}>
         <Stack
            width={56}
            height={56}
            flexShrink={0}
            justifyContent="center"
            alignItems="center"
            border={1}
            borderColor="divider"
            borderRadius={1}
            mr={2}
         >
            <Icon title="Add" variant="Regular" />
         </Stack>
         <Box>
            <Typography variant="body2" color="text.primary" noWrap>
               {title}
            </Typography>
            <Typography variant="caption" color="text.secondary" noWrap>
               {caption}
            </Typography>
         </Box>
         <input hidden multiple type="file" onChange={onChange} />
      </Button>
   );
}

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

export interface FileListProps {
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

export interface FileCardProps {
   file: File;
}

export function FileCard(props: FileCardProps) {
   const { file } = props;

   return (
      <Card>
         <CardActionArea>
            <Thumbnail file={file} height={200} />
            <Divider />
            <CardContent>
               <Typography variant="body2" noWrap>
                  {file ? file.name : null}
               </Typography>
               <Typography variant="caption" color="text.secondary" noWrap>
                  {file ? file.lastModified : null}
               </Typography>
            </CardContent>
         </CardActionArea>
      </Card>
   );
}

export const FILE_CARD_META: CodeComponentMeta<FileCardProps> = {
   name: "FileCard",
   props: {
      type: "string",
      name: "string",
      lastModified: "number",
      webkitRelativePath: "string",
   },
};

export const FILE_GRID_META: CodeComponentMeta<FileGridProps> = {
   name: "FileGrid",
   props: {},
};

export const FILE_LIST_META: CodeComponentMeta<FileListProps> = {
   name: "FileList",
   props: {},
};
