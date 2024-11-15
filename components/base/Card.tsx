export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-full transition-transform duration-200 hover:scale-[1.02]">
      {children}
    </div>
  );
}