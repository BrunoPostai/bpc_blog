type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="text-roman-marble bg-roman-dark min-h-screen">
      <div className="max-w-5xl mx-auto px-8">{children}</div>
    </div>
  );
}
