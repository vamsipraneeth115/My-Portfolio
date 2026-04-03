import { motion } from "framer-motion";

const categories = [
  { name: "Languages", skills: ["Python", "C", "C++", "Java", "JavaScript", "SQL", "HTML/CSS"] },
  { name: "Frameworks", skills: ["React", "FastAPI", "Flask", "Bootstrap"] },
  { name: "Tools & Databases", skills: ["VS Code", "Docker", "Jenkins", "Git", "GitHub", "PostgreSQL", "Tableau"] },
  { name: "Coursework", skills: ["DSA", "DBMS", "OS", "OOP", "Computer Networks", "AI/ML", "Software Engineering"] },
];

const Skills = () => (
  <section id="skills" className="py-20 md:py-28 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Skills, Technologies & Coursework
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.15 }}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h3 className="text-lg font-semibold mb-4 gradient-text">{cat.name}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
