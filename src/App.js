import React, { useRef } from 'react';
import { BrowserRouter as Router, } from "react-router-dom";
import Wrapper from "./components/Wrapper"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from "./components/About"
import RecentProjects from "./components/RecentProjects"
import Contact from "./components/Contact"

import Navbar from './components/Navbar'




function App() {
  const aboutRef = useRef()
  const projectsRef = useRef()
  const contactRef = useRef()


  function moveToAbout() {
    aboutRef.current.scrollIntoView()
  }

  function moveToProjects() {
    projectsRef.current.scrollIntoView()
  }

  function moveToContact() {
    contactRef.current.scrollIntoView()
  }

  return (
    <div>
      <Router>
        <Wrapper>
          <Navbar moveToAbout={moveToAbout} moveToProjects={moveToProjects} moveToContact={moveToContact} />
          <Home moveTo={moveToAbout} />
          <About refName={aboutRef} />
          <RecentProjects refName={projectsRef} />
          <Contact refName={contactRef} />
        </Wrapper>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
