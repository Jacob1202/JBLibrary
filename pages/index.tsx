import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import HeroSection from "../components/HeroSection";

export default function Index() {
  return (
    <>
      <Head>
        <title>{`${CMS_NAME}`}</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-start">
        <HeroSection />
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
