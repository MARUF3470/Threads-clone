"use client";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/option";
import Image from "next/image";
import AddThreads from "@/components/threads/AddThreads";
import PostCard from "@/components/common/PostCard";
import { PostType } from "@/type";
import { useState } from "react";
import axios from "axios";
const Home = () => {
  // const session = await getServerSession(authOptions);
  // const posts: Array<PostType> | [] = await getPost();
  const [posts, setPosts] = useState<PostType[]>([]);
  axios
    .get("/api/post")
    .then((res) => setPosts(res.data.data))
    .catch((err) => console.log(err));

  return (
    <div>
      {/* {session && JSON.stringify(session)} */}
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
        {posts?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
export default Home;
