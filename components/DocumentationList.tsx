import * as ScrollArea from "@radix-ui/react-scroll-area";
import { MLProps } from "../pages/ml";
import * as Separator from "@radix-ui/react-separator";
import Link from "next/link";

export default function DocumentationList({ posts }: MLProps) {
  return (
    <ScrollArea.Root className="w-[300px] h-[300px] rounded overflow-hidden border-r-1 border-black mr-4">
      <ScrollArea.Viewport className="w-full h-full rounded">
        <div>
          <h2 className="font-semibold mb-4">Introduction</h2>
          <div className="flex">
            <Separator.Root
              className="bg-gray-700 mx-[15px] w-[1px]"
              orientation="vertical"
            />
            <div className="flex flex-col pl-2">
              {posts.map((post) => (
                <div className="py-1" key={post.title}>
                  <Link href={`/ml/${post.slug}`}>{post.title}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea.Viewport>
    </ScrollArea.Root>
  );
}
