"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CommentType, PostType } from "@/type";
import PostCard from "@/components/common/PostCard";
import DynamicBar from "@/components/common/DynamicBar";
import CommentCard from "@/components/common/CommentCard";
import axios from "axios";
import { useState } from "react";
import UserProfileAvatar from "@/components/common/UserProfileAvater";
const ProfilePage = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [comments, setComments] = useState<CommentType[]>([]);
  axios
    .get("/api/user/post")
    .then((res) => setPosts(res.data.data))
    .catch((err) => console.log(err));
  axios
    .get("/api/user/comment")
    .then((res) => setComments(res.data.data))
    .catch((err) => console.log(err));

  return (
    <div>
      <DynamicBar title="Profile" />
      <div className="mt-5 flex items-center gap-4">
        <UserProfileAvatar name={posts[0]?.user?.name ?? "M"} image="" />
        <div>
          <h3 className="text-2xl font-semibold">{posts[0]?.user?.name}</h3>
          {posts[0]?.user?.username && (
            <h3 className="text-xs text-orange-300">
              @{posts[0]?.user?.username}
            </h3>
          )}

          <h3 className="text-xs">{posts[0]?.user?.email}</h3>
        </div>
      </div>
      <div className="mt-10">
        <Tabs defaultValue="post" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger className="w-full" value="post">
              Post
            </TabsTrigger>
            <TabsTrigger className="w-full" value="comment">
              Comments
            </TabsTrigger>
          </TabsList>
          <TabsContent value="post">
            {posts?.length ? (
              posts?.map((post) => (
                <PostCard key={post.id} post={post} isAuthCard={true} />
              ))
            ) : (
              <h1>You do not have any post</h1>
            )}
          </TabsContent>
          <TabsContent value="comment">
            {comments?.length ? (
              comments?.map((comment) => (
                <CommentCard
                  comment={comment}
                  isAuthCard={true}
                  key={comment.id}
                />
              ))
            ) : (
              <h1>You did not do any comment</h1>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfilePage;
