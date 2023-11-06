"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, User2 } from "lucide-react";
import SidebarLinks from "../common/SidebarLinks";

const MobileNav = () => {
  return (
    <nav className="md:hidden flex justify-between items-center">
      <div className="flex items-center">
        <Sheet>
          <SheetTrigger>
            <MenuIcon height={30} width={30} className="font-bold" />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                <div className="flex justify-center items-center">
                  <Image
                    src="/images/logo.svg"
                    width={50}
                    height={50}
                    alt="logo"
                  />
                  <h1 className="font-bold text-xl ml-2">Theads</h1>
                </div>
              </SheetTitle>
              <SheetDescription>
                <SidebarLinks />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <Image src="/images/logo.svg" alt="logo" width={50} height={50} />
      <Link href="/profile">
        <User2 width={20} height={20} className="font-bold" />
      </Link>
    </nav>
  );
};

export default MobileNav;
