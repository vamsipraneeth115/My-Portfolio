import { Code2, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © 2026 Chiranjeevi Vamsi Praneeth. All rights reserved.
      </p>
      <div className="flex gap-3">
        <a href="mailto:ccvp@example.com" className="text-muted-foreground hover:text-foreground transition-colors"><Mail size={16} /></a>
        <a href="https://github.com/vamsipraneeth115" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Github size={16} /></a>
        <a href="https://www.linkedin.com/in/ch-vamsi-praneeth-8074b3305" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin size={16} /></a>
        <a href="https://leetcode.com/u/CH_VAMSIPRANEETH/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Code2 size={16} /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
