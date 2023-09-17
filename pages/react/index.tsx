import Link from "next/link";
import Post from "../../interfaces/post";
import { getAllPosts } from "../../lib/api";
import ListNavigation from "../../components/ListNavigation";

export type Props = {
  posts: Post[];
};

export default function PageREACT({ posts }: Props) {
  return (
    <div className="container px-4 sm:px-0 min-h-screen mx-auto">
      <ListNavigation />

      {/* {posts.map((post) => (
          <div key={post.slug}>
            <Link href={`/dotnet/${post.slug}`}>{post.slug}</Link>
          </div>
        ))} */}
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
