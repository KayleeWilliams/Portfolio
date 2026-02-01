import About from "@/components/about";
import ScrollingBanner from "@/components/banner";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import ThemeSwitcher from "@/components/theme-switcher";

export const revalidate = 3600;
export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-row gap-4">
        <ScrollingBanner />
        <ThemeSwitcher />
      </div>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <div className="block md:hidden">
        <Skills />
      </div>
    </>
  );
}
