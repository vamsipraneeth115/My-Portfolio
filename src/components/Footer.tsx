import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © 2026 Chiranjeevi Vamsi Praneeth. All rights reserved.
      </p>
      <div className="flex gap-3">
        <a href="mailto:ccvp@example.com" className="text-muted-foreground hover:text-foreground transition-colors"><Mail size={16} /></a>
        <a href="https://github.com/vamsipraneeth" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Github size={16} /></a>
        <a href="https://linkedin.com/in/ccvp" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin size={16} /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
