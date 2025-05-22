import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Home from "@/components/Home";
import Projects from "@/components/Projects";

export default function RootPage() {
  return (
    <div className="h-screen">
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
