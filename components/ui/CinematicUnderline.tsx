export default function CinematicUnderline({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`cinematic-underline ${className}`}>
      {children}
    </span>
  );
}
