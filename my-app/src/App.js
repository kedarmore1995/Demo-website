import "./App.css";
import Alert from "./component/Alert";
import Navbar from "./component/Navbar";
import TextFrom from "./component/TextFrom";
import React, { useState } from 'react';
import About from "./component/About"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const [btnTxt, setBtnTxt] = useState("Enable dark mode");


  const handleThemeYellow = () => {
    setMode("warning")
    document.body.style.backgroundColor = '#fdfdc2';
    setBtnTxt("Enable dark mode")
  }
  const handleThemeGreen = () => {
    setMode("success")
    document.body.style.backgroundColor = '#d6efd6';
    setBtnTxt("Enable dark mode")

  }
  const handleThemeRed = () => {
    setMode("danger")
    document.body.style.backgroundColor = '#ffdbdb';
    setBtnTxt("Enable dark mode")

  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode !== 'dark') {
      setMode("dark")
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode enabled", "success");
      setBtnTxt('Enable light mode')
    
    } else {
      setMode("light")
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
      setBtnTxt('Enable dark mode')
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} handleThemeGreen={handleThemeGreen} handleThemeRed={handleThemeRed} handleThemeYellow={handleThemeYellow} btnTxt={btnTxt} />
        <Alert alert={alert} />
        <div className="container my-2">
        <Routes>
          <Route exact path="/about" element={<About mode = {mode} />}/>
          <Route exact path="/" element={<TextFrom heading="Try TextUtils- Word Counter, Character Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert} />}/>
        </Routes>
        </div>
      </Router>
    </>


  );
}

export default App;