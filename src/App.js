import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Test from './components/Test'
// import Navbar from './components/Navbar'




function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState()


  useEffect(() => {
    document.title = `${count}`;
  })

  async function handleName(event) {

    let vvv = event.target.value
    await setName(vvv)
  }

  return (
    <div>
      {/* <Navbar /> */}
      <p>you clicked {count} times</p>
      <input type="text" onChange={handleName}></input>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count > 0 ? count - 1 : count)}>Decrease</button>
      <Test name={name} />
    </div>
  );
}

export default App;
