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
function App() {
  return (
    <div className="App">
        <Navbar/>
        <AddUser/>
        <Login/>
        <Hero/>
        <AdminHome/>
        <AddHall/>
        <HallCheckForm/>
        <Signup/>
    </div>
  );
}

export default App;
