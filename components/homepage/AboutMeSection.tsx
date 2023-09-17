import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutMeSection() {
  return (
    <motion.div
      className="container mx-auto flex w-full items-center justify-center"
      initial={{ opacity: 0, transform: "translateY(10px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, amount: 1 }}
    >
      <div className="p-10 w-full flex flex-col items-center justify-center text-justify sm:max-w-[700px] max-w-[350px]">
        <h3 className="text-2xl font-semibold leading-none sm:text-4xl mb-6 w-full flex justify-center">
          About me
        </h3>
        <div className="text-md sm:text-lg">
          I&#39;m currently a{" "}
          <p className="inline-block border-b-2 border-black dark:border-zinc-600">
            software developer
          </p>{" "}
          with a degree in Computer Science and Econometrics from Warsaw
          University of Life Sciences. I have a passion for learning, and I am
          deeply interested in topics like Machine Learning, Data Science,
          Software Development and Design. My hobbies include swimming, playing
          the piano, traveling and trying to figure things out. Find me on
          &nbsp;
          <Link
            href={"https://www.linkedin.com/in/jakub-biniek-464735243/"}
            className="inline-block border-b-2 border-black dark:border-zinc-600"
            target="_blank"
          >
            LinkedIn.
          </Link>{" "}
        </div>

        <Link
          href={"/ml"}
          className="text-md sm:text-lg my-4 border-b-2 border-blue-700"
        >
          Learn with me.
        </Link>
      </div>
    </motion.div>
  );
}
