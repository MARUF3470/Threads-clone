"use client";
import React, { useState } from "react";
import CardBar from "./CardBar";
import { Heart } from "lucide-react";
import { PostType } from "@/type";
import ImageViewer from "./ImageViewer";
import AddComments from "../threads/AddComments";
import Link from "next/link";
import SharePost from "./SharePost";
import axios from "axios";
import { useRouter } from "next/navigation";

const PostCard = ({
  post,
  noRedirect,
  isAuthCard,
}: {
  post: PostType;
  noRedirect?: boolean;
  isAuthCard?: boolean;
}) => {
  const [toggle, setToggle] = useState<string>("");
  const router = useRouter();
  const likeBtnToggle = (status: string) => {
    setToggle(status);
    axios
      .post("/api/like", {
        post_id: post.id,
        toUser_id: post.user_id,
        status: status,
      })
      .then((res) => {
        router.refresh();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="mb-8">
      <CardBar post={post} isAuthCard={isAuthCard} />
      <div>
        <Link href={noRedirect ? "#" : `/post/${post.id}`}>
          <p className="ml-12 -mt-2">{post.content}</p>
        </Link>
        {post?.image && <ImageViewer img={post.image} />}
        <div className="flex items-center gap-4 my-2">
          {post.Likes.length ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-red-500 cursor-pointer"
              onClick={() => likeBtnToggle("0")}
            >
              <path
                d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          ) : (
            <Heart
              width={20}
              height={20}
              onClick={() => likeBtnToggle("1")}
              className="cursor-pointer"
            />
          )}
          <AddComments post={post} />
          <SharePost url={`${process.env.NEXTAUTH_URL}/post/${post.id}`} />
        </div>
        <div>
          <span>{post.comment_count} Replies</span>
          <span className="ml-3">{post?.likes_count} Likes</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
