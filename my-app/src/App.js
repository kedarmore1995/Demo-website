import "./App.css";
import Alert from "./component/Alert";
import Navbar from "./component/Navbar";
import TextFrom from "./component/TextFrom";
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);


  const handleThemeYellow =()=>{
    setMode("warning")
    document.body.style.backgroundColor = '#fdfdc2';
  }
  const handleThemeGreen =()=>{
    setMode("success")
    document.body.style.backgroundColor = '#d6efd6';
  }
  const handleThemeRed =()=>{
    setMode("danger")
    document.body.style.backgroundColor = '#ffdbdb';
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
    } else {
      setMode("light")
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");

    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} handleThemeGreen={handleThemeGreen} handleThemeRed={handleThemeRed} handleThemeYellow={handleThemeYellow}  />

      <Alert alert={alert} />
      <div className="container my-3">
        <TextFrom heading="Enter the text for analyze below" mode={mode} showAlert={showAlert}/>
        {/* <About/> */}

      </div>
    </>

  );
}


export default App;
