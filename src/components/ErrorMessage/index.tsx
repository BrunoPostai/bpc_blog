import clsx from "clsx";

type ErrorMessageProps = {
  pageTitle: string;
  contentTitle: string;
  content: React.ReactNode;
};

export default function ErrorMessage({
  pageTitle,
  contentTitle,
  content,
}: ErrorMessageProps) {
  return (
    <>
      <title>{pageTitle}</title>
      <div
        className={clsx(
          "min-h-90 bg-roman-dark text-roman-marble",
          "mb-16 p-8 rounded-xl border border-roman-red/30",
          "flex items-center justify-center",
          "text-center",
        )}
      >
        <div>
          <h1 className="text-7xl/tight mb-4 font-extrabold text-roman-red">{contentTitle}</h1>
          <div className="text-roman-gold/80">{content}</div>
        </div>
      </div>
    </>
  );
}
