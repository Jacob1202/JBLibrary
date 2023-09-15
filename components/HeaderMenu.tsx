import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import React from "react";
import Link from "next/link";

export default function HeaderMenu() {
  return (
    <div className="absolute top-20 z-10 items-center sm:relative sm:top-0 md:translate-y-0">
      <NavigationMenu.Root className="relative z-[1] flex w-[300px] justify-start">
        <NavigationMenu.List className="flex list-none items-center justify-between ">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="text-md group flex select-none items-center justify-between gap-1 rounded-md  py-2 font-medium leading-none  outline-none">
              Documentation{" "}
              <CaretDownIcon
                className="relative top-[1px] transition-transform duration-[300] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute left-0 top-0 z-10 w-full bg-white shadow-2xl data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft dark:bg-zinc-800 sm:w-[300px]">
              <ul className="m-0 grid w-[300px] list-none px-3 py-2">
                <li className=".3s rounded-md px-3 py-1 transition-all ease-in-out hover:bg-gray-100 dark:hover:bg-zinc-700">
                  <Link href="/ml">
                    <h5 className="text-md font-semibold text-black dark:text-white ">
                      Machine Learning
                    </h5>
                    <p className="mb-1 text-sm text-gray-700 dark:text-gray-300">
                      ML concepts, Deep Learning, Regression and more
                    </p>
                  </Link>
                </li>
                <li className=".3s rounded-md px-2 py-1  transition-all ease-in-out hover:bg-gray-100 dark:hover:bg-zinc-700">
                  <Link href="/dotnet">
                    <h5 className="text-md mt-1 font-semibold text-black dark:text-white">
                      ASP .NET development
                    </h5>
                    <p className="mb-1 text-sm text-gray-700 dark:text-gray-300">
                      My knowledge regarding web development in .NET
                    </p>
                  </Link>
                </li>
                <li className=".3s mb-1 rounded-md px-2  py-1 transition-all ease-in-out hover:bg-gray-100 dark:hover:bg-zinc-700">
                  <Link href="/react">
                    <h5 className="text-md mt-1 font-semibold text-black dark:text-white">
                      React
                    </h5>
                    <p className="mb-1 text-sm text-gray-700 dark:text-gray-300">
                      Contexts, State managers and more
                    </p>
                  </Link>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="text-md group flex select-none items-center justify-between gap-1 rounded-md px-3 py-2 font-medium leading-none outline-none">
              Design{" "}
              <CaretDownIcon
                className="relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute left-0 top-0 z-10 w-[300px] data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft dark:bg-zinc-800">
              <ul className="m-0 grid w-[300px] list-none px-3 py-2">
                <li className=".3s mb-1 rounded-md px-2  py-1 transition-all ease-in-out hover:bg-gray-100 dark:hover:bg-zinc-700">
                  <Link href="/design">
                    <h5 className="text-md mt-1 font-semibold text-black dark:text-white">
                      Showcase
                    </h5>
                    <p className="mb-1 text-sm text-gray-700 dark:text-gray-300">
                      A showcase of my projects
                    </p>
                  </Link>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator className="top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
            <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white dark:bg-zinc-800" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center rounded-md shadow-2xl dark:shadow-none">
          <NavigationMenu.Viewport className="relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn dark:bg-zinc-800 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
        </div>
      </NavigationMenu.Root>
    </div>
  );
}
