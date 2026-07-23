import Link from "next/link";
import { romanize } from "romans";
import { RomanEagle } from "@/components/RomanEagle";

export function Footer() {
  const year = romanize(new Date().getFullYear());

  return (
    <footer className="pb-16 text-center border-t border-roman-red/30 pt-8 mt-16">
      <RomanEagle className="w-8 h-8 mx-auto mb-4" />
      <p className="text-roman-gold/60 text-sm">
        <span>&copy; Anno {year} — </span>
        <Link className="text-roman-gold hover:text-roman-gold-light transition" href="/">
          SPQR Times
        </Link>
      </p>
      <p className="text-roman-gold/40 text-xs mt-1">
        Senatus Populusque Romanus
      </p>
    </footer>
  );
}
