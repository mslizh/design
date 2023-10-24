import { Chip, Stack, Typography } from "@mui/material";
import { Icon, IconProps } from "@/components/Icon";
import { theme } from "@/theme/theme";

export type ViewListItemChipsProps = {
   parentWidth?: number;
   chips: Chip[];
};

export type Chip = {
   icon?: IconProps;
   label: string;
};

export function ViewListItemChips({ parentWidth, chips }: ViewListItemChipsProps) {
   let maxChips;
   if (parentWidth) {
      if (parentWidth >= theme.breakpoints.values.lg) {
         maxChips = 4;
      } else if (parentWidth >= theme.breakpoints.values.md) {
         maxChips = 2;
      } else if (parentWidth >= theme.breakpoints.values.sm) {
         maxChips = 1;
      } else {
         maxChips = 0;
      }
   }

   const chipsToRender = chips.slice(0, maxChips);

   return (
      <Stack direction="row" gap={0.5}>
         {chipsToRender.map((chip, index) => (
            <Chip
               key={index}
               icon={chip.icon && <Icon {...chip.icon} />}
               label={<Typography noWrap={true}>{chip.label}</Typography>}
               sx={{ maxWidth: 180 }}
            />
         ))}
      </Stack>
   );
}
