import React from "react";
import UserAvatar from "./UserAvatar";
import { MoreHorizontal } from "lucide-react";
import { PostType } from "@/type";
import { formateDate } from "@/lib/utils";

const CardBar = ({ post }: { post: PostType }) => {
  return (
    <div className="flex items-center">
      <UserAvatar name="Maruf" image="" />
      <div className="flex justify-between items-start w-full ml-2">
        <strong>{post.user.name}</strong>
        <div className="flex items-center">
          <span className="mr-2">{formateDate(post.created_at)}</span>
          <MoreHorizontal width={22} height={22} />
        </div>
      </div>
    </div>
  );
};

export default CardBar;
