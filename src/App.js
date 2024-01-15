import NavBar from "./components/navBar";
import About from "./components/About";
import Qualifications from "./components/Qualifications";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="pt-20">
      <NavBar />
      <About />
      <Qualifications />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
