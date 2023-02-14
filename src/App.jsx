import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";

import Home from "./page/home/Home";
import Navbar from "./components/navbar/Navbar";
import Episodes from "./page/episodes/Episodes";
import Location from "./page/location/Location";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/episodes" element={<Episodes/>}/>
      <Route path="/location" element={<Location/>} />
      </Routes>
    </Router>
  );
}

export default App;
