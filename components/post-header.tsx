import DateFormatter from "./DateFormatter";
import type Author from "../interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  excerpt: string;
};

const PostHeader = ({ date, author, title, excerpt }: Props) => {
  return (
    <>
      <div className="cotainer mx-auto md:block md:mb-12 ">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold md:leading-none">
          {title}
        </h1>
        {excerpt}
        <div className="flex gap-4 items-center">
          {/* <Avatar picture={author.picture} name={author.name} /> */}
          <DateFormatter dateString={date} />
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6"></div>
      </div>
    </>
  );
};

export default PostHeader;
