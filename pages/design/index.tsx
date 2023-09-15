import Post from "../../interfaces/post";

export type Props = {
  posts: Post[];
};

export default function PageDOTNET({ posts }: Props) {
  return (
    <div className="sm:px-0 px-4 flex flex-col mt-10">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold md:leading-none my-4">
        Design showcase
      </h1>
      <div></div>
    </div>
  );
}
