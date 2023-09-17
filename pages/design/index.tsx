import Post from "../../interfaces/post";

export type Props = {
  posts: Post[];
};

export default function PageDOTNET({ posts }: Props) {
  return (
    <div className="sm:px-0 px-4 flex flex-col mt-10 container mx-auto min-h-screen">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold md:leading-none my-4">
        Design showcase
      </h1>
      <div></div>
    </div>
  );
}
