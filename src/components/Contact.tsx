import { motion } from "framer-motion";
import { Send, Mail, Code2, Github, Linkedin, Phone } from "lucide-react";

const CONTACT_EMAIL = "ccvp2006@gmail.com";
const FORM_ACTION = `https://formsubmit.co/${CONTACT_EMAIL}`;

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Get In Touch
        </motion.h2>
        <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
          I'm open to internships, collaborations, and software development
          opportunities. Feel free to reach out.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <form action={FORM_ACTION} method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value="New portfolio contact form submission" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Send size={16} /> Send Message
            </button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-4">
            The first form submission requires confirming FormSubmit from an email
            sent to {CONTACT_EMAIL}.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground">
            <Phone size={18} />
            <a href="tel:+917416052085" className="transition-colors hover:text-primary">
              +91 7416052085
            </a>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-3">
            Call or message me directly for faster communication.
          </p>

          <div className="flex items-center justify-center gap-4 mt-8">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="p-3 rounded-full bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <Mail size={18} className="text-muted-foreground" />
            </a>
            <a
              href="https://github.com/vamsipraneeth115"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <Github size={18} className="text-muted-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/ch-vamsi-praneeth-8074b3305"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <Linkedin size={18} className="text-muted-foreground" />
            </a>
            <a
              href="https://leetcode.com/u/CH_VAMSIPRANEETH/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <Code2 size={18} className="text-muted-foreground" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
