import portfolioImage from "./assets/portfolioimage.png";
import portfolio2Image from "./assets/portfolio2image.png";
import awesomeTodosImage from "./assets/awesometodos.png";

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const SKILLS = [
  { name: "HTML & CSS", level: 60 },
  { name: "JavaScript", level: 20 },
  { name: "React", level: 25 },
  { name: "Tailwind CSS", level: 50 },
  { name: "Git & GitHub", level: 60 },
  { name: "UI Design", level: 70 },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    description: "A clean personal portfolio built with React to showcase skills, projects, and contact details.",
    tech: ["React", "Vite", "CSS"],
    image: portfolioImage,
  },
  {
    title: "Developer Portfolio",
    description: "A personal portfolio highlighting front-end development skills, experience, and contact details.",
    tech: ["HTML", "CSS", "Typescript"],
    image: portfolio2Image,
  },
  {
    title: "AwesomeTodos App",
    description: "A todo app for organizing tasks and keeping track of what's next.",
    tech: ["React", "JavaScript", "CSS"],
    image: awesomeTodosImage,
  },
];
