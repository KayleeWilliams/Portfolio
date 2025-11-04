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
        "absolute rounded-full bg-violet-500 px-2 py-1 text-violet-50 text-xs",
        className
      )}
    >
      {children}
    </div>
  );
}
