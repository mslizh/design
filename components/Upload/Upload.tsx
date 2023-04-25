import Button from "@mui/material/ListItemButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Icon } from "@/components/Icon";
import { Box } from "@mui/material";
import { registerComponent } from "@plasmicapp/host";

interface UploadProps {
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
        <Icon name="AddRegular" />
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

export function registerUpload() {
  registerComponent(Upload, {
    name: "Upload",
    props: {
      title: "string",
      caption: "string",
    },
    importPath: "@/components/Upload",
  });
}
