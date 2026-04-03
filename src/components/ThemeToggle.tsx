import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  theme: string;
  toggle: () => void;
}

const ThemeToggle = ({ theme, toggle }: Props) => (
  <motion.button
    whileTap={{ scale: 0.9 }}
    onClick={toggle}
    className="p-2 rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
    aria-label="Toggle theme"
  >
    {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
  </motion.button>
);

export default ThemeToggle;
