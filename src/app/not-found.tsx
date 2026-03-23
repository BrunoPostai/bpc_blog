import clsx from "clsx";

export default function NotFoundPage() {
  return (
    <div
      className={clsx(
        "min-h-90 bg-slate-900 text-slate-100",
        "mb-16 p-8 rounded-xl",
        "flex items-center justify-center",
        "text-center",
      )}
    >
      <div>
        <h1 className="text-7xl/tight mb-4 font-extrabold">404</h1>
        <p>404 ERROR - THE PAGE YOU'RE TRYING TO FIND DOES NOT EXIST</p>
      </div>
    </div>
  );
}
