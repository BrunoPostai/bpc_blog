import { formatDatetime, formatDistanceToNow } from "@/utils/format-datetime";

type PostDateProps = {
  dateTime: string;
};

export function PostDate({ dateTime }: PostDateProps) {
  return (
    <time
      className="text-roman-gold text-sm/tight tracking-wider"
      dateTime={dateTime}
      title={formatDistanceToNow(dateTime)}
    >
      {formatDatetime(dateTime)}
    </time>
  );
}
