import ScrollingBanner from "@/components/Banner";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

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
