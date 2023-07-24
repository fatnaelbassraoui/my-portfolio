import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from './Components/Contact';
import Tech from './Components/Tech';



function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0" >
        <div className="bg-hero">
          <Navbar />
          <Hero />
        </div>

        <div className="relative -z-20">
          <About />
        </div>
        <div className="relative -z-20">
          <Tech />
        </div>
        <div className="relative -z-20">
          <Projects />
        </div>
        <div className="relative -z-20">
          <Contact />
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
