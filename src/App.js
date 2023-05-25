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
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Booking from "./components/Booking";
import { useState } from "react";
import Layout from "./components/Layout";
function App() {

  const [halls, setHalls] = useState([])
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="filter">
          <Route index element={<HallCheckForm />} />
          <Route path="booking/:id" element={<Booking />} />
        </Route>
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

