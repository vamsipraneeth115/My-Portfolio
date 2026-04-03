import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "FinGaze",
    desc: "An AI-driven stock portfolio risk classifier leveraging Deep Reinforcement Learning (FinRL) to categorize stocks into risk tiers and optimize portfolio allocation with real-time data visualization.",
    tech: ["Python", "FinRL", "Reinforcement Learning", "Data Visualization"],
    github: "#",
  },
  {
    title: "PresentationCore",
    desc: "An AI-powered presentation analyzer that evaluates slide design, content quality, and delivery patterns using ML models. Features React frontend with FastAPI backend and PostgreSQL storage.",
    tech: ["React", "FastAPI", "PostgreSQL", "Machine Learning"],
    github: "#",
  },
];

const Projects = () => (
  <section id="projects" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-4"
      >
        Featured Projects
      </motion.h2>
      <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
        A selection of projects I've built — from AI-powered tools to full-stack applications.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -4 }}
            className="rounded-xl border border-border bg-card p-6 flex flex-col hover:border-primary/50 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 flex-1">{p.desc}</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {p.tech.map((t) => (
                <span key={t} className="px-2 py-1 rounded text-xs bg-secondary text-secondary-foreground">{t}</span>
              ))}
            </div>
            <div className="flex gap-3">
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Github size={16} /> Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
