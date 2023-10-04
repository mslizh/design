import { Thumbnail } from "@/components/Thumbnail";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";

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
