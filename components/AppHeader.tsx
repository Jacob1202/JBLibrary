import { ThemeSwitch } from "./ThemeSwitch";
import HeaderMenu from "./HeaderMenu";
import Link from "next/link";

export default function AppHeader() {
  return (
    <nav className="container flex h-20 items-center justify-between mx-auto px-4 sm:px-0">
      <div className="flex flex-wrap items-center gap-4">
        <Link href="/" className="text-md font-semibold">
          JBLibrary
        </Link>
        <HeaderMenu />
      </div>

      <div className=" md:flex md:flex-row">
        <div className="flex flex-row gap-2 md:gap-4">
          <ThemeSwitch />
          <button
            className={`rounded-md bg-gray-200 px-4 py-1 text-sm font-semibold dark:bg-zinc-800`}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
