import {
  CustomSession,
  authOptions,
} from "@/app/api/auth/[...nextauth]/option";
import UserProfileAvatar from "@/components/common/UserProfileAvater";
import { getServerSession } from "next-auth";

const ProfileInfo = async () => {
  const session: CustomSession | null = await getServerSession(authOptions);

  return (
    <div>
      <UserProfileAvatar name="M" image="" />
      <div>
        <h3 className="text-2xl font-semibold">{session?.user?.name}</h3>
        <h3 className="text-xs text-orange-300">@{session?.user?.username}</h3>
        <h3 className="text-xs">{session?.user?.email}</h3>
      </div>
    </div>
  );
};

export default ProfileInfo;
