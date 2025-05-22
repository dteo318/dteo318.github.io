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
    <section id={id} className={`min-h-full ${className}`}>
      {children}
    </section>
  );
}
