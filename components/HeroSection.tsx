import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import WelcomeText from "./WelcomeText";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="mt-40 flex flex-col flex-wrap items-center justify-center sm:items-center">
      <div className="flex w-full items-center justify-center gap-2">
        <WelcomeText />
        <h1 className="text-3xl font-semibold sm:text-6xl">I&#39;m Jacob,</h1>
      </div>
      <div className="flex w-full flex-col items-center text-center">
        <h3 className="mb-[15px] text-3xl font-semibold leading-none sm:mb-0 sm:-translate-y-7 sm:text-6xl">
          this is my documentation
        </h3>
        <h3 className="text-md w-full px-4 text-gray-400 dark:text-gray-500 sm:max-w-[600px] sm:-translate-y-4 sm:px-0 sm:text-lg md:text-2xl">
          I&#39;m building an app to showcase my growth as a software developer.
          Learn with me.
        </h3>
      </div>
      <div className="flex gap-4 sm:gap-6 mt-3">
        <Link
          href="/data"
          className="bg-blue-700 text-white sm:px-6 px-5 sm:py-2 py-1 rounded-md font-semibold hover:bg-blue-800 ease-in-out transition-all duration-300"
        >
          <p>Learn more</p>
        </Link>
        <Link
          target="_blank"
          href="https://flowcv.com/resume/dms5ht4oev"
          className="flex items-center justify-center gap-2 border-gray-200 border-2 sm:px-6 px-5 sm:py-2 py-1 rounded-md font-semibold transition-all hover:bg-gray-100 ease-in-out transition-all  dark:hover:bg-zinc-800"
        >
          <p>Resume</p>
          <ArrowTopRightIcon />
        </Link>
      </div>
    </div>
  );
}
