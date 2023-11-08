import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserProfileAvatar = ({
  name,
  image,
}: {
  name: string;
  image?: string;
}) => {
  return (
    <Avatar className="w-20 h-20">
      <AvatarImage src={image} />
      <AvatarFallback className="text-2xl font-bold">{name[0]}</AvatarFallback>
    </Avatar>
  );
};

export default UserProfileAvatar;
