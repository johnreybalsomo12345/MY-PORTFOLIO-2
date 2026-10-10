import "./styles.css";
import { NAV } from "./data";
import useActiveSection from "./hooks/useActiveSection";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const IDS = NAV.map((n) => n.id);

export default function App() {
  const active = useActiveSection(IDS);

  const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="relative isolate min-h-screen font-sans text-white">
      <Background />
      <Navbar active={active} onNavigate={goTo} />
      <main>
        <Home onNavigate={goTo} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
