import { motion } from "framer-motion";
import { Award } from "lucide-react";

const items = [
  { title: "Web Development", desc: "Skill Vertex", file: "/web%20dev.jpeg" },
  {
    title: "Information Security A-Z",
    desc: "Infosys Springboard",
    file: "/informationsecurity.jpeg",
  },
  {
    title: "Complete UNIX & Linux OS Fundamentals",
    desc: "Infosys Springboard",
    file: "/unix.jpeg",
  },
  { title: "OCI AI Foundations", desc: "Oracle", file: "/oracle.png" },
  {
    title: "Natural Language Processing",
    desc: "Course Certificate",
    file: "/NLP.pdf",
  },
  {
    title: "Python for Data Science",
    desc: "NPTEL",
    file: "/nptel.jpeg",
  },
];

const Achievements = () => (
  <section id="achievements" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Certifications
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <motion.a
            key={item.title}
            href={item.file}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="block text-center p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:-translate-y-1 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Award className="text-primary" size={22} />
            </div>
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
            <p className="text-sm text-primary mt-3">View Certificate</p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
