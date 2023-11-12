import React from "react";
import UserAvatar from "./UserAvatar";
import { formateDate } from "@/lib/utils";
import { CommentType } from "@/type";
import DeleteCommentBtn from "../threads/DeleteCommentBtn";
const CommentCard = ({
  comment,
  isAuthCard,
}: {
  comment: CommentType;
  isAuthCard?: boolean;
}) => {
  return (
    <div className="mb-3">
      <div className="flex items-center space-x-4">
        <UserAvatar name={comment.user.name} image="" />
        <div className="bg-muted w-full rounded-lg p-4">
          <div className="flex justify-between items-start w-full">
            <p className="font-bold">{comment.user.name}</p>
            <div className="flex">
              <span className="mr-4 text-sm">
                {formateDate(comment.created_at)}
              </span>
              {isAuthCard && (
                <span>
                  <DeleteCommentBtn id={comment.id} />
                </span>
              )}
            </div>
          </div>
          <div>{comment.content}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
