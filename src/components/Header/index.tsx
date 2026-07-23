import clsx from "clsx";
import Link from "next/link";
import { RomanEagle } from "@/components/RomanEagle";

export function Header() {

  return (
    <header className="flex flex-col items-center gap-4 py-8 sm:py-10 md:py-11 lg:py-12">
      <RomanEagle className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20" />
      <h1
        className={clsx(
          "text-4xl/normal font-extrabold tracking-widest",
          "sm:text-5xl/normal",
          "md:text-6xl/normal",
          "lg:text-7xl/normal",
        )}
      >
        <Link className="text-roman-gold hover:text-roman-gold-light transition" href="/">
          SPQR TIMES
        </Link>
      </h1>
    </header>
  );
}
