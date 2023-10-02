import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { ThemeSwitch } from "./ThemeSwitch";

export default function AppHeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={`sm:hidden w-full block fixed top-0 left-0 z-10 bg-white dark:bg-zinc-900 overflow-hidden transition-all ease-in-out  delay-200 ${
        menuOpen
          ? "h-full bg-white transition-all duration-500 delay-200 z-10"
          : "h-20 duration-500 "
      }`}
    >
      <div className="flex justify-between items-center">
        <Link href="/" className="px-6">
          <Logo />
        </Link>
        <div className="flex items-center">
          <ThemeSwitch />
          <div
            className={`relative inline-block  h-20 w-20 cursor-pointer transition-all duration-200 ease-out ${
              menuOpen ? "rotate-90" : " rotate-0 delay-500"
            } `}
          >
            <div
              className={`w-6 h-4  relative block mt-[-4px] mx-auto mb-0 top-1/2 ${
                menuOpen
                  ? "transition-all duration-1000 ease-out delay-200"
                  : ""
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div
                className={`w-full h-[1px] block relative bg-black dark:bg-white transition-all duration-500 ease-out translate-y-0  ${
                  menuOpen ? "translate-y-2 rotate-45 delay-500" : " rotate-0"
                } `}
              ></div>
              <div
                className={`w-full h-[1px] block relative bg-black dark:bg-white transition-all duration-500 ease-out  translate-y-2  ${
                  menuOpen ? "translate-y-2 -rotate-45 delay-500" : "rotate-0"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <ul className={`relative block py-0 px-6 list-none`}>
        <li
          className={` mt-2  transition-all duration-500 ${
            menuOpen
              ? "opacity-100 scale-1 translate-y-0"
              : "scale-125 -translate-y-4 opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          <Link
            href="/dotnet"
            className="block dark:text-white text-black w-full z-12"
          >
            Software Development
          </Link>
        </li>
        <li
          className={` mt-2  transition-all duration-500 delay-100 ${
            menuOpen
              ? "opacity-100 scale-1 translate-y-0"
              : "scale-125 -translate-y-4 opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          <Link
            href="/design"
            className="block dark:text-white  text-black w-full z-12"
          >
            Design
          </Link>
        </li>
        <li
          className={` mt-2  transition-all duration-500 delay-200 ${
            menuOpen
              ? "opacity-100 scale-1 translate-y-0"
              : "scale-125 -translate-y-4 opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          <Link
            href="/data"
            className="block  dark:text-white text-black w-full z-12"
          >
            Data Science
          </Link>
        </li>
      </ul>
    </div>
  );
}
