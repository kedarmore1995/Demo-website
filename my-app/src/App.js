import "./App.css";
import Navbar from "./component/Navbar";
import TextFrom from "./component/TextFrom";
import React, { useState } from 'react';

// import About from "./component/About";

function App() {
  const [mode, setMode] = useState("light");

const toggleMode = () =>{
    if(mode === 'light'){
      setMode("dark")
      document.body.style.backgroundColor = 'black';
    }else{
      setMode("light")
      // setswitchMode("Enable Light Mode")
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode ={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      <TextFrom heading ="Enter the text for analyze below"  mode = {mode}/>
      {/* <About/> */}
      </div>
    </>

  );
}


export default App;
