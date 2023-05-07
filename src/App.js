import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analysis from "./components/Analysis";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <Navbar>
        <Login />
      </Navbar>
    </div>
  );
}

export default App;
