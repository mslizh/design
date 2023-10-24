import { Avatar, AvatarGroup } from "@/components/Avatar";

export interface ViewListItemUsersProps {
   users: User[];
}

export function ViewListItemUsers({ users }: ViewListItemUsersProps) {
   return (
      <AvatarGroup max={2} size="small" spacing={-4}>
         {users.map((user, index) => (
            <Avatar key={index} size="small" src={user.avatar}>
               {user.firstName[0] + user.lastName[0]}
            </Avatar>
         ))}
      </AvatarGroup>
   );
}
