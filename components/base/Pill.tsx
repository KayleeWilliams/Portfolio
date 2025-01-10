import { twMerge } from "tailwind-merge";
export default function Pill({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "absolute bg-violet-500 text-violet-50 text-xs px-2 py-1 rounded-full",
        className
      )}
    >
      {children}
    </div>
  );
}
