import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About"></Navbar>;
      <div className="container my-3">
      <Textform heading="Enter your text to analyze below"/>
      </div>
    </>
  );
}

export default App;
