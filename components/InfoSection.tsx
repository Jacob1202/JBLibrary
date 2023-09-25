import {
  ArrowRightIcon,
  BarChartIcon,
  DesktopIcon,
  LetterCaseCapitalizeIcon,
} from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Link from "next/link";

export default function InfoSection() {
  return (
    <div className="mt-64 p-10 w-full flex flex-col justify-center items-center bg-gray-50 dark:bg-zinc-800">
      <div className=" mx-auto container flex flex-col items-center">
        <h3 className="text-2xl font-semibold leading-none sm:text-4xl mb-6">
          Featured content
        </h3>
        {/* <h3 className="text-md w-full px-4 text-gray-400 dark:text-gray-500 max-w-[300px] md:sm:max-w-[500px] sm:px-0 sm:text-lg md:text-lg text-center mb-6">
          This library is for the purpose of presenting my understanding of
          various topics related to software development, data science and
          design.
        </h3> */}
        <div className="flex flex-col gap-6 w-full">
          <div className="sm:flex-row flex flex-col justify-around w-full gap-6">
            <div className="md:w-1/3 w-full p-4 sm:p-10 ">
              <motion.div
                initial={{ opacity: 0, transform: "translateY(10px)" }}
                className=" min-h-[300px] "
                whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                viewport={{ once: true, amount: 1 }}
              >
                <div className="flex items-center gap-4 mb-2">
                  <DesktopIcon />
                  <p className="text-lg sm:text-xl font-semibold">
                    Software Development
                  </p>
                </div>
                <p className="text-gray-600 dark:text-white text-justify">
                  Blog posts regarding software development in React, ASP .NET,
                  python and more. Created Machine Learning models, RESTful
                  APIs, React with TypeScript projects.
                </p>
              </motion.div>
              <div className="flex flex-row gap-2 items-center hover:gap-3 transition-all duration-200 ease-in">
                <Link
                  href={"/dotnet"}
                  className="border-b-2 border-black dark:border-white  "
                >
                  Find out more
                </Link>
                <ArrowRightIcon />
              </div>
            </div>
            <div className="md:w-1/3 w-full  p-4 sm:p-10 sm:border-l-2 border-gray-200 dark:border-zinc-500 sm:border-r-2 border-t-2 border-b-2 sm:border-t-0 sm:border-b-0">
              <motion.div
                initial={{ opacity: 0, transform: "translateY(10px)" }}
                className="min-h-[300px] "
                whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                viewport={{ once: true, amount: 1 }}
              >
                <div className="flex items-center gap-4 mb-2">
                  <BarChartIcon />
                  <p className="text-lg sm:text-xl font-semibold">
                    Data Science
                  </p>
                </div>
                <p className="text-gray-600 dark:text-white text-justify">
                  Blog posts regarding regression, models, data science
                  projects. Analyzing and evaluating created models.
                  Introduction to Machine Learning and basic math necessary for
                  ML.
                </p>
              </motion.div>
              <div className="flex flex-row gap-2 items-center hover:gap-3 transition-all duration-200 ease-in">
                <Link
                  href={"/data"}
                  className="border-b-2 border-black dark:border-white "
                >
                  Find out more
                </Link>
                <ArrowRightIcon />
              </div>
            </div>
            <div className="md:w-1/3 w-full  p-4 sm:p-10 ">
              <motion.div
                initial={{ opacity: 0, transform: "translateY(10px)" }}
                className="min-h-[300px]"
                whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                viewport={{ once: true, amount: 1 }}
              >
                <div className="flex items-center gap-4 mb-2">
                  <LetterCaseCapitalizeIcon />
                  <p className="text-lg sm:text-xl font-semibold">Design</p>
                </div>
                <p className="text-gray-600 dark:text-white text-justify">
                  Creating design systems, my portfolio and explained approach
                  to designing specific websites. Example projects.
                </p>
              </motion.div>
              <div className="flex flex-row gap-2 items-center hover:gap-3 transition-all duration-200 ease-in">
                <Link
                  href={"/design"}
                  className="border-b-2 border-black dark:border-white  "
                >
                  Find out more
                </Link>
                <ArrowRightIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
