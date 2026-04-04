import { useEffect, useState } from "react";
import { ArrowDown, Code2, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

const titles = [
  "Software Developer",
  "Problem Solver",
  "AI/ML Enthusiast",
  "Full-Stack Builder",
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80,
      );
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
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid items-center gap-6 md:gap-4 md:grid-cols-[0.9fr_1.1fr] max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex justify-center md:justify-start md:order-1"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl bg-card">
              <img
                src="/profile.jpg"
                alt="Chiranjeevi Vamsi Praneeth"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-white/10 rounded-full" />
            </div>
          </motion.div>

          <div className="text-center md:text-left md:order-2">
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
              className="text-muted-foreground max-w-lg mx-auto md:mx-0 mb-8"
            >
              Computer Science student focused on full-stack development,
              AI-powered applications, and writing clean, practical software that
              solves real problems.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4"
            >
              <a
                href="#projects"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
              >
                View Resume
              </a>
              <a
                href="#contact"
                className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
              >
                Contact Me
              </a>
              <div className="flex gap-3 md:ml-2">
                <a
                  href="https://github.com/vamsipraneeth115"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ch-vamsi-praneeth-8074b3305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://leetcode.com/u/CH_VAMSIPRANEETH/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <Code2 size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
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
