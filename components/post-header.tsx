import DateFormatter from "./DateFormatter";
import type Author from "../interfaces/author";
import Avatar from "./Avatar";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ date, author }: Props) => {
  return (
    <>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
        <DateFormatter dateString={date} />
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
