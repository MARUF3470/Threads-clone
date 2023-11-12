import CommentCard from "@/components/common/CommentCard";
import DynamicBar from "@/components/common/DynamicBar";
import PostCard from "@/components/common/PostCard";
import { getSinglePost } from "@/lib/serverMethods";
import { CommentType } from "@/type";
import React from "react";

const page = async ({ params }: { params: { id: number } }) => {
  const post = await getSinglePost(params.id);
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
            {post.Comment.map((item: CommentType) => (
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

export default page;
