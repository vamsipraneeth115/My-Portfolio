import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "FinGaze",
    desc: "An AI-driven stock portfolio risk classifier that uses Deep Reinforcement Learning to group stocks by risk tier and support smarter portfolio decisions with clear visual insights.",
    tech: ["Python", "FinRL", "Reinforcement Learning", "Data Visualization"],
    github: "https://github.com/vamsipraneeth115/Fin-Gaze.git",
  },
  {
    title: "PresentationCore",
    desc: "An AI-powered presentation analyzer that evaluates slide design, content quality, and delivery patterns using machine learning, with a React frontend, FastAPI backend, and PostgreSQL database.",
    tech: ["React", "FastAPI", "PostgreSQL", "Machine Learning"],
    github: "https://github.com/vamsipraneeth115/Presentationscore.git",
  },
  {
    title: "Deep-Fake Detection System",
    desc: "A MobileNet-based CNN trained for deep-fake detection using Kaggle video data, with dropout, batch normalization, and weight decay, deployed as a Streamlit app.",
    tech: ["Python", "CNN", "MobileNet", "Streamlit"],
    github: "https://github.com/vamsipraneeth115/Deep-Fake.git",
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
        A selection of projects that reflect my interest in AI, backend systems,
        and practical full-stack development.
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
                <span
                  key={t}
                  className="px-2 py-1 rounded text-xs bg-secondary text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={16} /> View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
