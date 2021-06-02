import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Test from './components/Test'
import Wrapper from "./components/Wrapper"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from "./components/About"
import RecentProjects from "./components/RecentProjects"
import Contact from "./components/Contact"

// import Navbar from './components/Navbar'




function App() {
  const aboutRef = useRef()
  // const projectsRef = useRef()


  // const [count, setCount] = useState(0);
  // const [name, setName] = useState()


  // useEffect(() => {
  //   document.title = `${count}`;
  // })

  // async function handleName(event) {

  //   let vvv = event.target.value
  //   await setName(vvv)
  // }

  function moveToAbout() {
    aboutRef.current.scrollIntoView()
  }

  // function moveToProjects() {
  //   projectsRef.current.scrollIntoView()
  // }

  return (
    <div>
      <Router>
        <Wrapper>
          <Route exact path="/about" component={About} />
          {/* <Navbar /> */}
          <Home moveTo={moveToAbout} />
          <About refName={aboutRef} />
          <RecentProjects />
          {/* <p>you clicked {count} times</p>
          <input type="text" onChange={handleName}></input>
          <button onClick={() => setCount(count + 1)}>Increase</button>
          <button onClick={() => setCount(count > 0 ? count - 1 : count)}>Decrease</button>
          <Test name={name} /> */}
          <Contact />
        </Wrapper>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
