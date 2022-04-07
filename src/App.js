import About from "./components/About";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="bg-gray-500 h-screen mt-16">home</div>
      <div id="about" className="bg-white h-screen ">
        <About />
      </div>
      <div id="projects" className="bg-gray-50  ">
        <Projects />
      </div>
      <div
        id="skills"
        className="bg-gray-50 my-20 flex items-center justify-center"
      >
        <Skills />
      </div>
      <div id="contact" className="bg-gray-500 h-screen ">
        contact
      </div>
    </div>
  );
}

export default App;
