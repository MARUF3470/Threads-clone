"use client";
import UserProfileAvatar from "@/components/common/UserProfileAvater";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShowUserType } from "@/type";
import PostCard from "@/components/common/PostCard";
import DynamicBar from "@/components/common/DynamicBar";
import CommentCard from "@/components/common/CommentCard";
import axios from "axios";
import { useState } from "react";
const ShowUser = ({ params }: { params: { id: number } }) => {
  // const user: ShowUserType | null = await getSingleUser(params.id);
  const [user, setUser] = useState<ShowUserType>();
  axios
    .get(`/api/user/${params.id}`)
    .then((res) => setUser(res.data.data))
    .catch((err) => console.log(err));
  return (
    <div>
      <DynamicBar title="Profile" />
      <div className="mt-5 flex items-center gap-4">
        <UserProfileAvatar name={user?.name ?? "M"} image="" />
        <div>
          <h3 className="text-2xl font-semibold">{user?.name}</h3>
          <h3 className="text-xs text-orange-300">@{user?.username}</h3>
          <h3 className="text-xs">{user?.email}</h3>
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
            {user?.Post && user.Post?.length ? (
              user.Post?.map((post) => <PostCard key={post.id} post={post} />)
            ) : (
              <h1>You do not have any post</h1>
            )}
          </TabsContent>
          <TabsContent value="comment">
            {" "}
            {user?.Comment && user.Comment?.length ? (
              user.Comment?.map((comment) => (
                <CommentCard comment={comment} key={comment.id} />
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

export default ShowUser;
