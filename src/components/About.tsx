import { motion } from "framer-motion";
import { Code2, Brain, Server } from "lucide-react";

const strengths = [
  { icon: Code2, title: "Full-Stack Development", desc: "Building end-to-end applications with React, FastAPI, and modern web technologies." },
  { icon: Brain, title: "AI / ML Enthusiast", desc: "Exploring reinforcement learning, NLP, and intelligent automation systems." },
  { icon: Server, title: "Problem Solving & DSA", desc: "Strong algorithmic thinking with expertise in data structures and competitive coding." },
];

const About = () => (
  <section id="about" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About Me</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          I'm a passionate Computer Science student at Dayananda Sagar College of Engineering with a CGPA of 9.44.
          I love building real-world solutions — from AI-powered stock risk classifiers to intelligent presentation analyzers.
          When I'm not coding, you'll find me exploring new tech, solving DSA problems, or diving into research papers.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {strengths.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
