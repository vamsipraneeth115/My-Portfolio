import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

const titles = ["Software Developer", "Problem Solver", "AI Enthusiast", "Full-Stack Builder"];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mb-4"
        >
          Hello, I'm
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 gradient-text leading-tight"
        >
          Chiranjeevi Vamsi Praneeth
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground h-10 mb-4"
        >
          {displayed}
          <span className="animate-pulse text-primary">|</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-muted-foreground max-w-lg mx-auto mb-8"
        >
          Building intelligent solutions, one line of code at a time.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            View Projects
          </a>
          <a href="#contact" className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors">
            Contact Me
          </a>
          <div className="flex gap-3 ml-2">
            <a href="https://github.com/vamsipraneeth" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/ccvp" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="inline-block mt-16 animate-bounce text-muted-foreground"
        >
          <ArrowDown size={24} />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
