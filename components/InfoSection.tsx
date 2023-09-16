import { BarChartIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export default function InfoSection() {
  return (
    <div className="mt-64 p-10 w-full flex flex-col justify-center items-start  border-b-2 border-gray-100 dark:border-zinc-800">
      <h3 className="text-2xl font-semibold leading-none sm:text-4xl mb-6">
        Featured content
      </h3>
      <div className="flex flex-row flex-wrap gap-6">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(10px)" }}
          className="max-w-[300px]"
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: false, amount: 1 }}
        >
          <div className="flex items-center gap-4 mb-2">
            <BarChartIcon />
            <p className="text-2xl font-semibold">Data Science</p>
          </div>
          <p className="text-sm text-gray-600 dark:text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            fuga quae impedit iure dolor deserunt molestias est quibusdam
            perspiciatis. Explicabo?
          </p>
        </motion.div>
      </div>
    </div>
  );
}
