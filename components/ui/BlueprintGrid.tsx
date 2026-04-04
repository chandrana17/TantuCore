export default function BlueprintGrid({
  children,
  variantClass = "",
  className = "",
}: {
  children: React.ReactNode;
  variantClass?: string;
  className?: string;
}) {
  return (
    <div className={`relative w-full h-full ${variantClass} ${className}`}>
      {children}
    </div>
  );
}
