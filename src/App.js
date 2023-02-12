
import './App.css';
import Navbar from './components/Navbar';
import FrontScreen from './components/FrontScreen';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { useRef } from 'react';
import Footer from './components/Footer';

function App() {


  const refList = useRef([])

  const cards = document.querySelectorAll(".cardClass");

  const observer = new IntersectionObserver(enteriesList => {

    enteriesList.forEach(entry => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    })



  });

  cards.forEach(card => {
    observer.observe(card);
  })

  // console.log("hello")

  return (
    <>
      <Navbar refList={refList} />
      <FrontScreen />
      <About />
      <Skills />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
