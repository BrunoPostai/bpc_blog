import { format, formatDistanceToNow as dateFnsFormatDistanceToNow, } from "date-fns";
import { enGB } from "date-fns/locale";

export function formatDateTime(rawDate: string) {
  const date = new Date(rawDate);

  return format(date, "dd/MM/yyyy 'at' HH'h'mm", {
    locale: enGB,
  });
}

export function formatDistanceToNow(rawDate: string) {
  const date = new Date(rawDate);

  return dateFnsFormatDistanceToNow(date, {
    locale: enGB,
    addSuffix: false,
  });
}

const rawDate = "2025-05-12T06:31:23.411Z";

console.log(rawDate);
console.log(formatDistanceToNow(rawDate));
