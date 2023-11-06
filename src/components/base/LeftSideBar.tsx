"use client";
import Image from "next/image";
import SidebarLinks from "../common/SidebarLinks";
const LeftSideBar = () => {
  return (
    <div className="h-screen md:w-1/4 lg:p-10 md:pt-5 border-r-2 hidden md:block">
      <div className="flex justify-center items-center">
        <Image src="/images/logo.svg" width={50} height={50} alt="logo" />
        <h1 className="font-bold text-xl ml-2">Theads</h1>
      </div>
      <SidebarLinks />
    </div>
  );
};

export default LeftSideBar;
