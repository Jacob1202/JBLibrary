"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

export function ThemeSwitch() {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex flex h-8 w-8 items-center justify-center">
          <SunIcon className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
          <MoonIcon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-white" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className=" w-full animate-slideUpAndFade rounded-md bg-white p-[5px] shadow-2xl will-change-[opacity,transform] dark:bg-[#0E0E10]"
          sideOffset={5}
        >
          <DropdownMenu.Item
            onClick={() => setTheme("dark")}
            className="group relative flex h-8 cursor-pointer select-none items-center gap-2 rounded-md px-2 text-sm leading-none outline-none dark:text-white"
          >
            <MoonIcon />
            Dark theme
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onClick={() => setTheme("light")}
            className="group relative flex h-8 cursor-pointer select-none items-center gap-2 rounded-md px-2  text-sm leading-none outline-none dark:text-white"
          >
            <SunIcon />
            Light theme
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
