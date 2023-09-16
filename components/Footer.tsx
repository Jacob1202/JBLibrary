import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import * as Separator from "@radix-ui/react-separator";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="border-t-2 border-gray-100 dark:border-zinc-800 mt-10 h-16 flex justify-between flex-wrap items-center px-4">
      <p className="font-semibold text-sm">JBLibrary 2023</p>
      <div className="flex gap-4 items-center">
        <s className="text-sm font-semibold text-gray-300">PL</s>
        <p className="text-sm font-semibold">EN</p>
        <Link href="https://www.linkedin.com/in/jakub-biniek-464735243/">
          <LinkedInLogoIcon className="hover:cursor-pointer" />
        </Link>

        <Link href="https://github.com/Jacob1202">
          <GitHubLogoIcon className="hover:cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}
