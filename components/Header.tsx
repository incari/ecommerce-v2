import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "./ui/SearchIcon";
import { WavesIcon } from "./ui/WavesIcon";

export const Header = () => {
  return (
    <header className="flex items-center px-4 py-3 shadow-sm dark:bg-gray-950 w-full backdrop-blur-md z-40 fixed ">
      <Link
        href="/"
        className="flex items-center gap-2"
        prefetch={false}
      >
        <WavesIcon className="h-6 w-6" />
        EpicQuest
        <span className="text-lg font-semibold"></span>
      </Link>
      <div className="relative flex-1 max-w-md mx-auto">
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
        <Input
          type="email"
          placeholder="Search"
          className="pl-8 w-full"
        />
      </div>
    </header>
  );
};
