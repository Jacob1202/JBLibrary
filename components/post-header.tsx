import DateFormatter from "./DateFormatter";
import type Author from "../interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ date, author, title }: Props) => {
  return (
    <>
      <div className="cotainer mx-auto md:block md:mb-12 ">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold md:leading-none">
          {title}
        </h1>
        <DateFormatter dateString={date} />
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6"></div>
      </div>
    </>
  );
};

export default PostHeader;
