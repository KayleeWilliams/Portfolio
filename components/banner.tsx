import { Card } from "./base/card";

const bannerText = [
  "📚 Always Learning",
  "🚀 React • TypeScript • Python",
  "🎨 Design-minded Engineer",
  "🔎 console.log(\"here?\")",
  "🛠️ Shipping products, not features",
  "⭐ Building c15t",
  "💡 Can this be improved? Most likely.",
  "🌐 Open Source Contributor",
  "💜 TypeScript Maximalist",
];

export default function ScrollingBanner() {
  return (
    <Card className="relative h-14 overflow-hidden p-4">
      <div className="absolute top-0 left-0 z-10 h-full w-[100px] bg-linear-to-r from-card to-transparent" />
      <div className="absolute top-0 right-0 z-10 h-full w-[100px] bg-linear-to-l from-card to-transparent" />

      <div className="flex">
        <div className="marquee-left flex whitespace-nowrap">
          {bannerText.concat(bannerText).map((item, i) => {
            const originalIndex = i % bannerText.length;
            const key = `banner-${originalIndex}-${Math.floor(
              i / bannerText.length
            )}`;
            return (
              <span className="mr-12" key={key}>
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
