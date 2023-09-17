import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} className="sm:text-lg text-md my-4">
      {format(date, "LLLL	d, yyyy")}
    </time>
  );
};

export default DateFormatter;
