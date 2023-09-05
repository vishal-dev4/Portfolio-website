import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skills";
import CodingOverview from "./Components/CodingOverview/CodingOverview";
import GithubStats from "./Components/GithubStats/GithubStats";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
import About from "./Components/About/About";


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{
      background: darkMode? 'black': '', 
      color: darkMode? 'white': '',
      }}>
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <CodingOverview/>
      <GithubStats/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
