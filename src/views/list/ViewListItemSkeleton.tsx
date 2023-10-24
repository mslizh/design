import { ListItem, Skeleton, Stack } from "@mui/material";

export function ViewListItemSkeleton() {
   return (
      <ListItem>
         {/* Checkbox */}
         <Skeleton width={20} height={20} variant="rounded" />

         {/* Icon */}
         <Skeleton width={20} height={20} variant="rounded" />

         {/* Avatar */}
         <Skeleton width={32} height={32} variant="circular" />

         {/* Text */}
         <Stack sx={{ flex: 1 }}>
            <Skeleton height={20} variant="text" />
            <Skeleton height={16} variant="text" />
         </Stack>

         {/* Chips */}
         <Stack direction="row">
            <Skeleton width={120} height={32} variant="rounded" />
            <Skeleton width={120} height={32} variant="rounded" />
            <Skeleton width={120} height={32} variant="rounded" />
            <Skeleton width={120} height={32} variant="rounded" />
         </Stack>

         {/* Download Button */}
         <Skeleton width={100} height={32} variant="rounded" />

         {/* AvatarGroup */}
         <Stack direction="row" gap={0.5}>
            <Skeleton width={32} height={32} variant="circular" />
            <Skeleton width={32} height={32} variant="circular" />
         </Stack>
      </ListItem>
   );
}
