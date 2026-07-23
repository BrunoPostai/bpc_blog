import { romanize } from "romans";
import {
  format,
  formatDistanceToNow as dateFnsFormatDistanceToNow,
} from "date-fns";
import { ptBR } from "date-fns/locale";

function toRoman(n: number): string {
  if (n === 0) return "N";
  return romanize(n);
}

export function formatDatetime(rawDate: string): string {
  const date = new Date(rawDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${toRoman(day)} • ${toRoman(month)} • ${toRoman(year)}`;
}

export function formatDistanceToNow(rawDate: string): string {
  const date = new Date(rawDate);
  return dateFnsFormatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
}

export function formatHour(timestampMs: number): string {
  const date = new Date(timestampMs);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${toRoman(hours)}:${toRoman(minutes)}:${toRoman(seconds)}`;
}
