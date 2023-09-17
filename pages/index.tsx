import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import HeroSection from "../components/HeroSection";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import InfoSection from "../components/InfoSection";
import AboutMeSection from "../components/homepage/AboutMeSection";

export default function Index() {
  return (
    <>
      <Head>
        <title>{`${CMS_NAME}`}</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-start">
        <HeroSection />
        <InfoSection />
        <AboutMeSection />
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
//   const allPosts = getAllPosts([
//     "title",
//     "date",
//     "slug",
//     "author",
//     "coverImage",
//     "excerpt",
//   ]);

//   return {
//     props: { allPosts },
//   };
// };
