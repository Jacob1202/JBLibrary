import HeaderMenu from "./HeaderMenu";
import HeaderMenuMobile from "./AppHeaderMobile";
import Logo from "./Logo";
import { ThemeSwitch } from "./ThemeSwitch";
import Link from "next/link";

export default function AppHeader() {
  return (
    <nav className="h-20 items-center justify-between  flex">
      <div className="flex flex-wrap items-center gap-4">
        <Link href="/" className="text-md font-semibold flex gap-4">
          <Logo />
        </Link>
        <HeaderMenu />
      </div>
      <div className=" md:flex md:flex-row">
        <div className="flex flex-row gap-2 md:gap-4 items-center">
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
