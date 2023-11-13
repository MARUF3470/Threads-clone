"use client";
import CartListUser from "@/components/common/CartListUser";
import DynamicBar from "@/components/common/DynamicBar";
import ExploreSearchBar from "@/components/explore/ExploreSearchBar";
// import { exploreUsers } from "@/lib/serverMethods";
import { User } from "@/type";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ExplorePage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  // const users: Array<User> | [] = await exploreUsers(searchParams?.query!);
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    axios
      .get(`/api/explore?query=${searchParams?.query!}`)
      .then((res) => setUsers(res.data.data))
      .catch((err) => console.log(err));
  }, [searchParams?.query!]);
  return (
    <div>
      <DynamicBar title="Explore" />
      <ExploreSearchBar />
      <div className="mt-5">
        {users?.length > 0 &&
          users?.map((item) => <CartListUser user={item} key={item.id} />)}
        {users?.length < 1 && searchParams?.query?.length! > 1 && (
          <div className="text-center">
            <h1 className="font-bold">No User found</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;
