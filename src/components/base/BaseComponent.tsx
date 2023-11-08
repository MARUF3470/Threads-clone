import React from "react";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import MobileNav from "./MobileNav";
import { ScrollArea } from "@/components/ui/scroll-area";

const BaseComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:container p-6 md:p-0">
      <div className="flex">
        <LeftSideBar />
        <ScrollArea className="h-screen w-full lg:w-2/4 md:w-3/4 lg:px-8 lg:py-4 xl:px-12  md:p-6">
          <MobileNav />
          {children}
        </ScrollArea>
        <RightSideBar />
      </div>
    </div>
  );
};

export default BaseComponent;
