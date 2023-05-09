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
import ViewHall from "./components/ViewHall/ViewHall";
import EditHall from "./components/EditHall";
import { Route,Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
function App() {

  const[halls,setHalls]=useState([])
  return (    
    <Routes>
      <Route path="/" element={<ViewHall halls={halls} setHalls={setHalls} />}></Route>
      <Route path="/edit/:id" element={<EditHall halls={halls} setHalls={setHalls} />}></Route>
    </Routes>

  );
}

export default App;
