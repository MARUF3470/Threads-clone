"use client";
import CommentCard from "@/components/common/CommentCard";
import DynamicBar from "@/components/common/DynamicBar";
import PostCard from "@/components/common/PostCard";
import { CommentType, PostType } from "@/type";
import axios from "axios";
import React, { useState } from "react";

const PostPage = ({ params }: { params: { id: number } }) => {
  const [post, setPost] = useState<PostType>();
  axios
    .get(`/api/post/${params.id}`)
    .then((res) => setPost(res.data.data))
    .catch((err) => console.log("Sing post error", err));
  return (
    <div>
      <DynamicBar title="Show Post" />
      {post && (
        <div>
          <PostCard noRedirect={true} post={post} />
        </div>
      )}
      <div className="mt-5">
        <h1 className="font-bold text-lg mb-5">Comments</h1>

        {post?.Comment ? (
          <div>
            {post.Comment?.map((item: CommentType) => (
              <CommentCard comment={item} key={item.id} />
            ))}
          </div>
        ) : (
          <div>No Comments Found</div>
        )}
      </div>
    </div>
  );
};

export default PostPage;
