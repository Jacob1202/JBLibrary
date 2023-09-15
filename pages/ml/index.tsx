import Link from "next/link";
import Post from "../../interfaces/post";
import { getAllPosts } from "../../lib/api";
import DocumentationList from "../../components/DocumentationList";

export type MLProps = {
  posts: Post[];
};

export default function PageML({ posts }: MLProps) {
  return (
    <div className="sm:px-0 px-4 flex flex-row mt-10 gap-4">
      <DocumentationList posts={posts} />
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold md:leading-none mb-4">
        Machine Learning Library
      </h1>
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
