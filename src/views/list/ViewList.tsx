import { List } from "@mui/material";
import { ViewListItem, ViewListItemProps } from "./ViewListItem";
import { useElementSize } from "usehooks-ts";

interface ViewListProps {
   items: Omit<ViewListItemProps, "parentSize">[];
}

export function ViewList({ items }: ViewListProps) {
   const [ref, { width }] = useElementSize();
   return (
      <div ref={ref}>
         <List>
            {items.map((item, index) => (
               <ViewListItem key={index} parentSize={width} {...item} />
            ))}
         </List>
      </div>
   );
}
