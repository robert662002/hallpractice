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
import UserHome from "./components/UserHome";
import Unauthorized from "./components/Unauthorized";
import { Route,Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import { useState } from "react";
function App() {

  const[halls,setHalls]=useState([])
  return (    
    <Routes>
      <Route path="/" element={ <ViewHall halls={halls} setHalls={setHalls} />}></Route>
      <Route path="/edit/:id" element={<EditHall halls={halls} setHalls={setHalls} />}></Route>
      <Route path="/addhall" element={<AddHall halls={halls} setHalls={setHalls} />}></Route>
      <Route path="/signup" element={<AddHall halls={halls} setHalls={setHalls} />}></Route>
      <Route path="/Adminhome" element={<AdminHome halls={halls} setHalls={setHalls} />}></Route>
      <Route path="/Userhome" element={<UserHome halls={halls} setHalls={setHalls} />}></Route>
      <Route path="/hallcheck" element={<HallCheckForm halls={halls} setHalls={setHalls} />}></Route>
      <Route path="/unauth" element={<Unauthorized halls={halls} setHalls={setHalls} />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;




///////jddddddddddddddddd