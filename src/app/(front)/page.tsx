import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/option";
import Image from "next/image";
import AddThreads from "@/components/threads/AddThreads";
import PostCard from "@/components/common/PostCard";
import { getPost } from "@/lib/serverMethods";
import { PostType } from "@/type";
const Home = async () => {
  // const session = await getServerSession(authOptions);
  const posts: Array<PostType> | [] = await getPost();
  console.log(posts);
  return (
    // <div>
    //   {/* <ThemeToggleBtn /> */}
    //   {/* {session && JSON.stringify(session)} */}
    //   <LeftSideBar />
    // </div>
    <div>
      <div className="flex justify-center items-center">
        <Image
          src="/images/logo.svg"
          className="hidden md:block"
          width={40}
          height={40}
          alt="logo"
        />
      </div>
      <AddThreads />
      <div className="my-5">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
export default Home;
