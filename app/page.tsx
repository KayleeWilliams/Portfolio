import About from "@/components/about";
import ScrollingBanner from "@/components/banner";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import ThemeSwitcher from "@/components/theme-switcher";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-row gap-4">
        <ScrollingBanner />
        <ThemeSwitcher />
      </div>
      <Hero />
      <Experience />
      <Projects />
    </>
  );
}
