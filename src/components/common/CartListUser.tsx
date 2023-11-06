"use client";
import { Button } from "../ui/button";
import UserAvatar from "./UserAvatar";
import Link from "next/link";
const CartListUser = () => {
  return (
    <div className="w-full shadow-sm  p-4 rounded-md mb-3">
      <div className="flex">
        <UserAvatar name="Maruf" image="" />
        <div className="flex justify-between items-start w-full">
          <div className="flex flex-col">
            <strong className="text-md font-bold ml-2">Maruf</strong>
            <span className="ml-2 font-light text-xs">@Maruf</span>
          </div>
          <Link href={""}>
            <Button size="sm">view</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartListUser;
