export default function Section({
  children,
  id = "",
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`min-h-full flex flex-col items-center gap-3 p-8 bg-no-repeat bg-center bg-cover ${className}`}
    >
      {children}
    </section>
  );
}
