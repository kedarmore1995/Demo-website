import "./App.css";
import Navbar from "./component/Navbar";
// import TextFrom from "./component/TextFrom";
import About from "./component/About";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" />
      <div className="container my-3">
      {/* <TextFrom heading ="Enter the text for analyze below" /> */}
      <About/>
      </div>
    </>

  );
}


export default App;
