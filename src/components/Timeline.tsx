import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "Dayananda Sagar College of Engineering",
    subtitle: "B.E. in Computer Science & Engineering",
    detail: "CGPA: 9.44 | 2023 - Present",
  },
  {
    icon: GraduationCap,
    title: "Narayana Junior College",
    subtitle: "Intermediate (MPC)",
    detail: "97.2% | 2021 - 2023",
  },
];

const Timeline = () => (
  <section id="education" className="py-20 md:py-28 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Education
      </motion.h2>

      <div className="max-w-2xl mx-auto relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`relative flex mb-8 pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%]"}`}
          >
            <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center md:-translate-x-1/2">
              <item.icon size={14} className="text-primary" />
            </div>
            <div className="rounded-xl border border-border bg-card p-4 w-full">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-primary">{item.subtitle}</p>
              <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Timeline;
