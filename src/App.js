import "./App.css";
import Navbar from "./components/Navbar";
import FrontScreen from "./components/FrontScreen";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { useRef } from "react";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CodingSkills from "./components/CodingSkills"
import MusicSkills from "./components/MusicSkills";
function App() {

  const cards = document.querySelectorAll(".cardClass");

  const observer = new IntersectionObserver((enteriesList) => {
    enteriesList.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  });

  cards.forEach((card) => {
    observer.observe(card);
  });

  // console.log("hello")
  console.log(window.screenY,"chk")
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

        <Route path="/" element={<FrontScreen />}></Route>

          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/coding" element={<CodingSkills />}></Route>
          <Route path="/music-production" element={<MusicSkills />}></Route>
          

        </Routes>
        
      </Router>
    </>
  );
}

export default App;
