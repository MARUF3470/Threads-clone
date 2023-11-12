import React from "react";
import UserAvatar from "./UserAvatar";
import { MoreHorizontal, Trash2 } from "lucide-react";
import { PostType } from "@/type";
import { formateDate } from "@/lib/utils";
import DeletePostBtn from "../threads/DeletePostBtn";

const CardBar = ({
  post,
  isAuthCard,
}: {
  post: PostType;
  isAuthCard?: boolean;
}) => {
  return (
    <div className="flex items-center">
      <UserAvatar name={post.user.name} image="" />
      <div className="flex justify-between items-start w-full ml-2">
        <strong>{post.user.name}</strong>
        <div className="flex items-center">
          <span className="mr-2">{formateDate(post.created_at)}</span>
          {isAuthCard ? (
            <DeletePostBtn id={post.id} />
          ) : (
            <MoreHorizontal width={22} height={22} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CardBar;
