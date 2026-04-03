import { useTheme } from "@/hooks/useTheme";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const { theme, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggle} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
