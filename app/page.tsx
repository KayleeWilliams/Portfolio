import About from "@/components/about";
import ScrollingBanner from "@/components/banner";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export const revalidate = 3600;
export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <ScrollingBanner />
      <About />
      <Experience />
      <Projects />
      <div className="block md:hidden">
        <Skills />
      </div>
    </>
  );
}
