import { registerFileUploader } from "@/components/FileUploader";
import { registerFileListItem } from "@/components/FileListItem";
import { registerIcon } from "@/components/Icon";
import { registerIconButton } from "@/components/IconButton";
import { registerInputAdornment } from "@/components/InputAdornment";
import { registerInputBase } from "@/components/InputBase";
import { registerOutlinedInput } from "@/components/OutlinedInput";
import { registerPaper } from "@/components/Paper";
import { registerScheduler } from "@/components/Scheduler";
import { registerStack } from "@/components/Stack";
import { registerTypography } from "@/components/Typography";
import { registerToggleButton } from "@/components/ToggleButton";
import { registerToggleButtonGroup } from "@/components/ToggleButtonGroup";
import { registerUpload } from "@/components/Upload";
import { registerToaster } from "@/components/Toaster";
import { registerTooltip } from "@/components/Tooltip";
import { registerToolbar } from "@/components/Toolbar";

export function registerAll() {
   registerFileListItem();
   registerFileUploader();
   registerIcon();
   registerInputAdornment();
   registerIconButton();
   registerInputBase();
   registerOutlinedInput();
   registerPaper(styleProps);
   registerScheduler();
   registerStack(styleProps);
   registerToggleButton();
   registerToggleButtonGroup();
   registerToolbar(styleProps);
   registerTooltip();
   registerTypography(styleProps);
   registerUpload();
   registerToaster();
}

const styleNumberProp = {
   type: "number",
   advanced: true,
};

export const styleProps = {
   alignItems: {
      type: "choice",
      options: ["flex-start", "flex-end", "center", "baseline", "stretch"],
   },
   justifyContent: {
      type: "choice",
      options: [
         "flex-start",
         "flex-end",
         "center",
         "space-between",
         "space-around",
         "space-evenly",
      ],
   },
   padding: styleNumberProp,
   paddingX: styleNumberProp,
   paddingY: styleNumberProp,
   paddingTop: styleNumberProp,
   paddingBottom: styleNumberProp,
   paddingLeft: styleNumberProp,
   paddingRight: styleNumberProp,
   margin: styleNumberProp,
   marginX: styleNumberProp,
   marginY: styleNumberProp,
   marginTop: styleNumberProp,
   marginBottom: styleNumberProp,
   marginLeft: styleNumberProp,
   marginRight: styleNumberProp,
};
