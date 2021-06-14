import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, } from "react-router-dom";
import Wrapper from "./components/Wrapper"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from "./components/About"
import RecentProjects from "./components/RecentProjects"
import Contact from "./components/Contact"

import Navbar from './components/Navbar'
// the following is for Google Analytics
import ReactGA from 'react-ga';




function App() {

  ReactGA.initialize('UA-199525036-1');

  useEffect(() => {
    // to report page view
    ReactGA.pageview(window.location.pathname + window.location.search);

  }, [])

  const aboutRef = useRef()
  const projectsRef = useRef()
  const contactRef = useRef()


  function moveToAbout() {
    aboutRef.current.scrollIntoView()
    ReactGA.event({
      category: "Button Click",
      action: "About me button is clicked"

    })
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
