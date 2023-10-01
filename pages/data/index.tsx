import Link from "next/link";
import Post from "../../interfaces/post";
import { getAllPosts } from "../../lib/api";
import DocumentationList from "../../components/DocumentationList";
import Head from "next/head";

export type MLProps = {
  posts: Post[];
};

export default function PageML({ posts }: MLProps) {
  return (
    <div className=" flex sm:flex-row flex-col-reverse mt-[5rem] sm:mt-10 gap-4  min-h-screen items-start justify-end sm:justify-start">
      <Head>
        <title>Data Science | JBLibrary</title>
      </Head>
      <DocumentationList posts={posts} />

      <div>
        <h1 className="text-2xl md:text-3xl lg:text-5xl  md:leading-none my-4">
          Data Science Library
        </h1>
        <p className="max-w-[700px] mt-6 text-justify sm:text-lg text-md text-gray-500">
          This is a collection of blog posts containing my understanding of
          various aspects of Data Science. In this library I create and analyze
          models and explain different topics, based on information widely
          available on the Internet and/or coming from my computer science and
          econometrics degree.
        </p>
        <p className="max-w-[700px] mt-6 text-justify sm:text-lg text-md text-gray-500">
          Under every blog post I leave links to content further explaining
          certain topics or showing a different explanation so feel free to
          learn more by yourself.
        </p>
        <div className="max-w-[700px] mt-6 text-justify sm:text-lg text-md text-gray-500">
          If you feel as if a section is missing some information in order to
          better explain something, please reach out to me &nbsp;
          <Link
            href={"https://www.linkedin.com/in/jakub-biniek-464735243/"}
            className="inline-block border-b border-black dark:border-zinc-600"
            target="_blank"
          >
            here.
          </Link>{" "}
        </div>
        <Link
          href={`data/${posts[0].slug}`}
          className="inline-block border-b border-black dark:border-zinc-600 mt-10 sm:text-lg text-md"
        >
          Start learning
        </Link>{" "}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { posts },
  };
};
