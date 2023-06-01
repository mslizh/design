import { CodeComponentMeta } from "@plasmicapp/host";
import { ContainerProps } from "@mui/material";
import { styleProps } from "@/components";

export const containerMeta: CodeComponentMeta<ContainerProps> = {
  name: "Container",
  props: {
    children: "slot",
    fixed: "boolean",
    disableGutters: "boolean",
    maxWidth: {
      type: "choice",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
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
    padding: {
      type: "number",
      advanced: true,
    },
    paddingX: {
      type: "number",
      advanced: true,
    },
    paddingY: {
      type: "number",
      advanced: true,
    },
    paddingTop: {
      type: "number",
      advanced: true,
    },
    paddingBottom: {
      type: "number",
      advanced: true,
    },
    paddingLeft: {
      type: "number",
      advanced: true,
    },
    paddingRight: {
      type: "number",
      advanced: true,
    },
    margin: {
      type: "number",
      advanced: true,
    },
    marginX: {
      type: "number",
      advanced: true,
    },
    marginY: {
      type: "number",
      advanced: true,
    },
    marginTop: {
      type: "number",
      advanced: true,
    },
    marginBottom: {
      type: "number",
      advanced: true,
    },
    marginLeft: {
      type: "number",
      advanced: true,
    },
    marginRight: {
      type: "number",
      advanced: true,
    },
  },
  importPath: "@mui/material",
};
