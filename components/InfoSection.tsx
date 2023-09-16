import {
  BarChartIcon,
  DesktopIcon,
  LetterCaseCapitalizeIcon,
} from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import ExampleChart from "./homepage/ExampleChart";
import DesignSkeleton from "./homepage/DesignSkeleton";

export default function InfoSection() {
  return (
    <div className="mt-64 p-10 w-full flex flex-col justify-center items-start  border-b-2 border-gray-100 dark:border-zinc-800">
      <h3 className="text-2xl font-semibold leading-none sm:text-4xl mb-6">
        Featured content
      </h3>
      <div className="flex flex-col gap-6 w-full">
        <div className="sm:flex-row flex flex-col justify-between w-full">
          <motion.div
            initial={{ opacity: 0, transform: "translateY(10px)" }}
            className="max-w-[300px]"
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            viewport={{ once: true, amount: 1 }}
          >
            <div className="flex items-center gap-4 mb-2">
              <DesktopIcon />
              <p className="text-2xl font-semibold">Software Development</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-white text-justify">
              Blog posts regarding software development in React, ASP .NET,
              python and more. Created Machine Learning models, RESTful APIs,
              React with TypeScript projects.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, transform: "translateY(10px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            viewport={{ once: true, amount: 1 }}
          ></motion.div>
        </div>
        <div className="sm:flex-row flex flex-col justify-between w-full">
          <motion.div
            initial={{ opacity: 0, transform: "translateY(10px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            viewport={{ once: true, amount: 1 }}
          >
            <ExampleChart />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, transform: "translateY(10px)" }}
            className="max-w-[300px]"
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            viewport={{ once: true, amount: 1 }}
          >
            <div className="flex items-center gap-4 mb-2">
              <BarChartIcon />
              <p className="text-2xl font-semibold">Data Science</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-white text-justify">
              Blog posts regarding regression, models, data science projects.
              Analyzing and evaluating created models. Introduction to Machine
              Learning and basic math necessary for ML.
            </p>
          </motion.div>
        </div>
        <div className="sm:flex-row flex flex-col justify-between w-full">
          <motion.div
            initial={{ opacity: 0, transform: "translateY(10px)" }}
            className="max-w-[300px]"
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            viewport={{ once: true, amount: 1 }}
          >
            <div className="flex items-center gap-4 mb-2">
              <LetterCaseCapitalizeIcon />
              <p className="text-2xl font-semibold">Design</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-white text-justify">
              Creating design systems, my portfolio and explained approach to
              designing specific websites. Example projects.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, transform: "translateY(10px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            viewport={{ once: true, amount: 1 }}
          >
            <DesignSkeleton />
          </motion.div>
        </div>
      </div>
    </div>
  );
}