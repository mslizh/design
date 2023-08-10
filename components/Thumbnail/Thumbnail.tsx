import Box from "@mui/material/Box";
import useFileSrc from "@/hooks/useFileSrc";

export interface ThumbnailProps {
   file: File;
   width?: string | number;
   height?: string | number;
   state?: "default" | "loading" | "error";
   border?: boolean;
}

export function Thumbnail(props: ThumbnailProps) {
   const { file, width, height, border } = props;
   const src = useFileSrc(file);

   return (
      <Box
         width={width ? width : "100%"}
         height={height ? height : "100%"}
         display="flex"
         justifyContent="center"
         alignItems="center"
         bgcolor="background.paper"
         border={border ? 1 : undefined}
         borderColor={border ? "divider" : undefined}
         borderRadius={border ? 1 : undefined}
         overflow="hidden"
      >
         {file?.type.startsWith("image") ? (
            <img
               src={src ? src : undefined}
               srcSet={src ? src : undefined}
               alt={file.name}
               style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
               }}
            />
         ) : null}
      </Box>
   );
}
