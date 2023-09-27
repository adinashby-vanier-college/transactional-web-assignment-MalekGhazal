import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Homescreen";
import Navbar from "./Pages/Home/Navbar";
import TechNews from "./Pages/Home/TechNews";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/technews" element={<TechNews />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
