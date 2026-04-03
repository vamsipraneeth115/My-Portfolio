
# Personal Portfolio Website — Chandolu Chiranjeevi Vamsi Praneeth

## Overview
A modern, responsive portfolio built with React + Vite + Tailwind CSS + Framer Motion, featuring a blue/indigo color scheme, dark/light mode, particle background, and resume download.

## Sections & Features

### 1. Sticky Navbar (Glassmorphism)
- Logo/name on left, section links on right
- Dark/light mode toggle (sun/moon icon, system preference detection)
- Scroll progress bar at top
- Mobile hamburger menu
- Active section highlighting on scroll

### 2. Hero Section
- Animated gradient text for name "Chandolu Chiranjeevi Vamsi Praneeth"
- Typing effect for titles: "Software Developer", "Problem Solver", "AI Enthusiast"
- Tagline: "Building intelligent solutions, one line of code at a time"
- CTA buttons: "View Projects" + "Contact Me"
- Particle background animation (subtle floating dots/connections)
- Resume download button

### 3. About Me
- Professional intro with photo placeholder
- Key strengths highlighted: DSA, AI/ML, Full-Stack Development
- Brief personal touch

### 4. Skills Section
- Categorized with badges/progress indicators:
  - **Languages:** Python, C, C++, Java, JavaScript, SQL, HTML/CSS
  - **Frameworks:** React, FastAPI, Flask, Bootstrap
  - **Tools:** VS Code, Docker, Jenkins, Git, GitHub, PostgreSQL, Tableau
- Animated skill bars or badge grid with hover effects

### 5. Projects Section (Card Grid)
- **FinGaze** — AI Stock Portfolio Risk Classifier (Python, FinRL, RL)
- **PresentationCore** — AI Presentation Analyzer (React, ML, PostgreSQL, FastAPI)
- Each card: title, description, tech stack badges, GitHub link, hover animation
- Framer Motion stagger reveal

### 6. Education & Certifications (Timeline)
- Dayananda Sagar College of Engineering — BE, CGPA 9.44 (2023–Present)
- Narayana Junior College — Intermediate 97.2% (2021–2023)
- Certifications: Web Dev, InfoSec, Linux, OCI AI Foundations
- Vertical timeline with alternating sides on desktop

### 7. Achievements
- Academic highlights (9.44 CGPA, 97.2% intermediate)
- Coursework expertise areas
- Certification badges

### 8. Contact Section
- Contact form (name, email, message — UI only)
- Social links: GitHub, LinkedIn, Email
- Animated on scroll

### 9. Footer
- Copyright © 2026
- Quick links + social icons

## Design & UX
- **Color scheme:** Blue/Indigo primary with clean whites/darks
- **Dark mode:** Toggle + system preference, stored in localStorage
- **Animations:** Framer Motion for scroll reveals, hover effects, page transitions
- **Responsive:** Mobile-first with breakpoints for tablet/desktop
- **Smooth scroll** between sections
- **SEO:** Meta tags, proper title, favicon

## File Structure
- `src/pages/Index.tsx` — Main page composing all sections
- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/About.tsx`
- `src/components/Skills.tsx`
- `src/components/Projects.tsx`
- `src/components/Timeline.tsx`
- `src/components/Achievements.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`
- `src/components/ParticleBackground.tsx`
- `src/components/ScrollProgress.tsx`
- `src/components/ThemeToggle.tsx`
- `src/hooks/useTheme.ts`
- Resume PDF in `public/` for download
