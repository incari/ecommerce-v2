"use client";
import React, { Suspense } from "react";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "./ui/SearchIcon";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = () => {
  const searchParams = useSearchParams();

  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex-1 max-w-md mx-auto">
      <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
      <Input
        type="email"
        placeholder="Search"
        className="pl-8 w-full"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("search")?.toString()}
      />
    </div>
  );
};

const SearchBarSuspense = () => {
  useSearchParams;
  return (
    <Suspense>
      <SearchBar />
    </Suspense>
  );
};

export { SearchBarSuspense as SearchBar };
