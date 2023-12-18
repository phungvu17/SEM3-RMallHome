import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import About from "./components/pages/about";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Start Home */}
        <Route path="/" element={<Home />} />
        {/* End Home */}

        {/*Start About */}
        <Route path="/about" element={<About />} />
        {/* End About */}
      </Routes>
    </div>
  );
}

export default App;
