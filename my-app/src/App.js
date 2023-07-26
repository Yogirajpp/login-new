import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />}/>
          <Route path="/Signup" element={<Signup />}/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
