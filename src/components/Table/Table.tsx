import {
   TableBodyProps,
   TableCellProps,
   TableContainerProps,
   TableFooterProps,
   TableHeadProps,
   TableProps,
   TableRowProps,
} from "@mui/material";
import { CodeComponentMeta } from "@plasmicapp/loader-nextjs";

export const TABLE_BODY_META: CodeComponentMeta<TableBodyProps> = {
   name: "TableBody",
   props: {
      children: "slot",
      sx: "object",
   },
   parentComponentName: "Table",
   styleSections: ["visibility"],
};

export const TABLE_CELL_META: CodeComponentMeta<TableCellProps> = {
   name: "TableCell",
   props: {
      align: {
         type: "choice",
         options: ["inherit", "center", "justify", "left", "right"],
      },
      children: "slot",
      padding: {
         type: "choice",
         options: ["checkbox", "none", "normal"],
      },
      size: {
         type: "choice",
         options: ["small", "medium", "large"],
      },
      sortDirection: {
         type: "choice",
         options: ["asc", "desc"],
      },
      sx: "object",
      variant: {
         type: "choice",
         options: ["body", "footer", "head"],
      },
   },
   parentComponentName: "TableRow",
   styleSections: ["visibility"],
};

export const TABLE_CONTAINER_META: CodeComponentMeta<TableContainerProps> = {
   name: "TableContainer",
   props: {
      children: "slot",
      sx: "object",
   },
   styleSections: ["visibility"],
};

export const TABLE_FOOTER_META: CodeComponentMeta<TableFooterProps> = {
   name: "TableFooter",
   props: {
      children: "slot",
      sx: "object",
   },
   parentComponentName: "Table",
   styleSections: ["visibility"],
};

export const TABLE_HEAD_META: CodeComponentMeta<TableHeadProps> = {
   name: "TableHead",
   props: {
      children: "slot",
      sx: "object",
   },
   parentComponentName: "Table",
   styleSections: ["visibility"],
};

export const TABLE_META: CodeComponentMeta<TableProps> = {
   name: "Table",
   props: {
      children: "slot",
      padding: {
         type: "choice",
         options: ["checkbox", "none", "normal"],
      },
      size: {
         type: "choice",
         options: ["small", "medium", "large"],
      },
      stickyHeader: "boolean",
      sx: "object",
   },
   parentComponentName: "TableContainer",
   styleSections: ["visibility"],
};

export const TABLE_ROW_META: CodeComponentMeta<TableRowProps> = {
   name: "TableRow",
   props: {
      children: "slot",
      hover: "boolean",
      selected: "boolean",
      sx: "object",
   },
   parentComponentName: "Table",
   styleSections: ["visibility"],
};
