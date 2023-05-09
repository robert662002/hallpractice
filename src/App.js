import React from "react";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Hero from "./components/Hero";
import Analysis from "./components/Analysis";
import Login from "./components/Login";
import HallCheckForm from "./components/HallCheckForm";
import AdminHome from "./components/AdminHome";
import AddUser from "./components/AddUser";
import AddHall from "./components/AddHall";
import ViewHall from "./components/ViewHall/ViewHall"
import { useState } from "react";
function App() {

  const[halls,setHalls]=useState([])
  return (
    <div className="App">
        <AddHall halls={halls} setHalls={setHalls}/>
        <ViewHall halls={halls} setHalls={setHalls}/>
    </div>
  );
}

export default App;
