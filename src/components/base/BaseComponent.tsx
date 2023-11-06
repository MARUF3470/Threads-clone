import React from "react";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import MobileNav from "./MobileNav";
import Image from "next/image";
import AddThreads from "../threads/AddThreads";
const BaseComponent = () => {
  return (
    <div className="md:container p-5 mt-10">
      <div className="flex">
        <LeftSideBar />
        <div className="h-screen w-full lg:w-2/4 md:w-3/4 lg:px-8 lg:py-4 xl:px-12  md:p-6">
          <MobileNav />
          <div className="flex justify-center items-center">
            <Image src="/images/logo.svg" width={40} height={40} alt="logo" />
          </div>
          <AddThreads />
        </div>
        <RightSideBar />
      </div>
    </div>
  );
};

export default BaseComponent;
