import { Profile } from "@/components/Profile";
import ScrollingBanner from "@/components/Banner";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container max-w-screen-lg mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar Section */}
          <div className="md:col-span-1 space-y-6">
            <Profile />
            <Skills />
          </div>

          {/* Main Section */}
          <main className="md:col-span-2 space-y-6">
            <ScrollingBanner />
            <About />
            <Experience />
            <Projects />
          </main>
        </div>
      </div>
    </div>
  );
}
