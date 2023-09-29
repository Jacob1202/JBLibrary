import HeaderMenu from "./HeaderMenu";
import { ThemeSwitch } from "./ThemeSwitch";
import Link from "next/link";

export default function AppHeader() {
  return (
    <nav className="flex h-20 items-center justify-between">
      <div className="flex flex-wrap items-center gap-4">
        <Link href="/" className="text-md font-semibold">
          [Library]
        </Link>
        <HeaderMenu />
      </div>
      <div className=" md:flex md:flex-row">
        <div className="flex flex-row gap-2 md:gap-4">
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
