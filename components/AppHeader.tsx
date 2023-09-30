import HeaderMenu from "./HeaderMenu";
import HeaderMenuMobile from "./HeaderMenuMobile";
import Logo from "./Logo";
import { ThemeSwitch } from "./ThemeSwitch";
import Link from "next/link";

export default function AppHeader() {
  return (
    <nav className="flex h-20 items-center justify-between">
      <div className="flex flex-wrap items-center gap-4">
        <Link href="/" className="text-md font-semibold flex gap-4">
          <Logo />
        </Link>
        <HeaderMenu />
      </div>
      <div className=" md:flex md:flex-row">
        <div className="flex flex-row gap-2 md:gap-4 items-center">
          <ThemeSwitch />
          <HeaderMenuMobile />
        </div>
      </div>
    </nav>
  );
}
