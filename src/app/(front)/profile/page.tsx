import {
  CustomSession,
  authOptions,
} from "@/app/api/auth/[...nextauth]/option";
import UserProfileAvatar from "@/components/common/UserProfileAvater";
import { ArrowLeft } from "lucide-react";
import { getServerSession } from "next-auth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getUserComment, getUserPost } from "@/lib/serverMethods";
import { CommentType, PostType } from "@/type";
import PostCard from "@/components/common/PostCard";
import DynamicBar from "@/components/common/DynamicBar";

import CommentCard from "@/components/common/CommentCard";
const ProfilePage = async () => {
  const session: CustomSession | null = await getServerSession(authOptions);
  const posts: Array<PostType> | [] = await getUserPost();
  const comments: Array<CommentType> | [] = await getUserComment();

  return (
    <div>
      <DynamicBar title="Profile" />
      <div className="mt-5 flex items-center gap-4">
        <UserProfileAvatar name="M" image="" />
        <div>
          <h3 className="text-2xl font-semibold">{session?.user?.name}</h3>
          <h3 className="text-xs text-orange-300">
            @{session?.user?.username}
          </h3>
          <h3 className="text-xs">{session?.user?.email}</h3>
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
              posts.map((post) => (
                <PostCard key={post.id} post={post} isAuthCard={true} />
              ))
            ) : (
              <h1>You do not have any post</h1>
            )}
          </TabsContent>
          <TabsContent value="comment">
            {" "}
            {comments?.length ? (
              comments.map((comment) => (
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
