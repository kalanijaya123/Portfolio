import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import BeyondWorks from './Components/BeyondWorks';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Chatbot from './Components/Chatbot';
import Education from './Components/Education';
import Sampels from './Components/Sampels';
import GalaxyBackground from "./Components/GalaxyBackground";

function App() {
  return (
    <div className='relative'>
      <Navbar />
      <div className="parallax-gradient-bg scroll-smooth">
      <GalaxyBackground />
      <Chatbot />
      <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <BeyondWorks />
        <Contact /> 
        <Sampels/>
      </div>
      <Footer />
    </div>
  );
}

export default App;


/*style={{
        backgroundImage:  "linear-gradient(to bottom right,rgb(13, 0, 22),rgb(24, 1, 39),rgb(15, 2, 27),rgb(35, 0, 59))",
        backgroundColor: '#000015' // fallback color
      }} */