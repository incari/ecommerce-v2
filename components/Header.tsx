import Link from "next/link";
import { WavesIcon } from "./ui/WavesIcon";
import { SearchBar } from "./SearchBar";

const Header = () => {
  return (
    <header className="flex items-center px-4 py-3 shadow-sm dark:bg-gray-950 w-full backdrop-blur-md z-40 fixed ">
      <Link
        href="/"
        className="flex items-center gap-2 pr-2"
        prefetch={false}
      >
        <WavesIcon className="h-6 w-6 " />
        EpicQuest
      </Link>
      <SearchBar />
    </header>
  );
};

export { Header };
