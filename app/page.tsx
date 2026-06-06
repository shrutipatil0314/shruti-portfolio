import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      {/* Fixed spinning gear */}
      <div
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          fontSize: 36,
          zIndex: 200,
          opacity: 0.6,
          pointerEvents: "none",
        }}
        className="animate-spin-slow"
      >
        ⚙️
      </div>
    </>
  );
}
