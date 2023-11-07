import React from "react";
import CardBar from "./CardBar";
import Image from "next/image";
import { Heart, MessageCircle, SendHorizonal } from "lucide-react";
import { PostType } from "@/type";

const PostCard = ({ post }: { post: PostType }) => {
  return (
    <div className="mb-8">
      <CardBar post={post} />
      <div>
        <p className="ml-12 -mt-2">{post.content}</p>
        {post?.image && (
          <Image
            src={`/uploads/${post.image}`}
            width={500}
            height={500}
            className="w-full h-52 object-cover cursor-pointer rounded-2xl my-2"
            alt=""
          />
        )}
        <div className="flex gap-4 my-2">
          <Heart hanging={20} width={20} className="cursor-pointer" />
          <MessageCircle hanging={20} width={20} className="cursor-pointer" />
          <SendHorizonal hanging={20} width={20} className="cursor-pointer" />
        </div>
        <div>
          <span>2 Replies</span>
          <span className="ml-3">1 Likes</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
