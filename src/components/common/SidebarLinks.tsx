import { Bell, Home, Search, User2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import ThemeToggleBtn from "./ThemeToggleBtn";
import SignOutBtn from "./SignOutBtn";
const SidebarLinks = () => {
  const path = usePathname();
  return (
    <ul className="flex flex-col gap-5 mt-10">
      <li>
        <Link href="/" className="flex items-center gap-4 justify-start">
          <Home height={20} width={20} />
          <p
            className={`text-lg lg:text-xl hover:font-semibold duration-300 ${
              path === "/" ? "font-bold" : ""
            }`}
          >
            Home
          </p>
        </Link>
      </li>
      <li>
        <Link href="/" className="flex items-center gap-4 justify-start">
          <Search height={20} width={20} />
          <p
            className={`text-lg lg:text-xl hover:font-semibold duration-300 ${
              path === "/explore" ? "font-bold" : ""
            }`}
          >
            Explore
          </p>
        </Link>
      </li>
      <li>
        <Link href="/" className="flex items-center gap-4 justify-start">
          <Bell height={20} width={20} />
          <p
            className={`text-lg lg:text-xl hover:font-semibold duration-300 ${
              path === "/notification" ? "font-bold" : ""
            }`}
          >
            Notifications
          </p>
        </Link>
      </li>
      <li>
        <Link href="/" className="flex items-center gap-4 justify-start">
          <User2 height={20} width={20} />
          <p
            className={`text-lg lg:text-xl hover:font-semibold duration-300 ${
              path === "/profile" ? "font-bold" : ""
            }`}
          >
            Profile
          </p>
        </Link>
      </li>
      <li className="flex items-center absolute bottom-32 gap-10">
        <SignOutBtn />
        <ThemeToggleBtn />
      </li>
    </ul>
  );
};

export default SidebarLinks;
