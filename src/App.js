import { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Nav toggle={toggle} />
      <div id="home">home</div>
      <About />
      <Projects />
      <Skills />
      <div id="contact">contact</div>
    </div>
  );
}

export default App;
