import React from "react";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Hero from "./components/Hero";
import Analysis from "./components/Analysis";
import Login from "./components/Login";
import HallCheckForm from "./components/HallCheckForm";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <HallCheckForm/>
    </div>
  );
}

export default App;
