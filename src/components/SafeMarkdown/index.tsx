import clsx from "clsx";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

type SafeMarkdownProps = {
  markdown: string;
};

export function SafeMarkdown({ markdown }: SafeMarkdownProps) {
  return (
    <div
      className={clsx(
        "prose prose-roman",
        "w-full max-w-none",
        "overflow-hidden",
        "prose-a:transition",
        "prose-a:no-underline",
        "prose-a:hover:underline",
        "prose-a:hover:text-amber-500",
        "prose-img:mx-auto",
        "md:prose-lg",
      )}
    >
      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
