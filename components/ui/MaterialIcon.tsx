export default function MaterialIcon({
  icon,
  className = "",
  filled = false,
}: {
  icon: string;
  className?: string;
  filled?: boolean;
}) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{ fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0" }}
    >
      {icon}
    </span>
  );
}
