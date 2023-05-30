import React from "react";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Hero from "./components/ForPractise/Hero";
import Analysis from "./components/ForPractise/Analysis";
import Login from "./components/Login";
import HallCheckForm from "./components/UserPages/HallCheckForm";
import AdminHome from "./components/AdminPages/AdminHome";
import AddHall from "./components/AdminPages/AddHall";
import EditHall from "./components/AdminPages/EditHall";
import UserHome from "./components/UserPages/UserHome";
import Unauthorized from "./components/Unauthorized";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import { useState } from "react";
import Layout from "./components/Layout";
import BookSubmit from "./components/UserPages/BookSubmit";
import Cancelbook from "./components/UserPages/Cancelbook";
import RequireAuth from "./components/General/RequireAuth";
import PersistLogin from "./components/General/PersistLogin";
import UserBookings from "./components/UserPages/UserBookings";




const ROLES = {
  'User': 2001,
  'Admin': 5150,
}



function App() {

  const [halls, setHalls] = useState([])
  return (
    <Routes>

      <Route path="/" element={<Layout />}>

        <Route path="/" element={<Home />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />

        <Route element={<PersistLogin />}>

          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path="userHome">
              <Route index element={<UserHome />} />
              <Route path="cancel" element={<Cancelbook />} />
              <Route path="userBookings" element={<UserBookings />} />
              <Route path="filter">
                <Route index element={<HallCheckForm />} />
                <Route path="booking/:id" element={<BookSubmit />} />
              </Route>
            </Route>
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path='adminHome'>
              <Route index element={<AdminHome />} />
            </Route>
          </Route>

        </Route>

      </Route>
    </Routes>
  );
}

export default App;

