type RomanEagleProps = {
  className?: string;
};

export function RomanEagle({ className }: RomanEagleProps) {
  return (
    <img
      src="/roman_eagle.svg"
      alt="Aquila Romana"
      className={className}
    />
  );
}
