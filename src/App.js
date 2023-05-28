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
import { useState } from "react";
import Layout from "./components/Layout";
import BookSubmit from "./components/BookSubmit";
import Cancelbook from "./components/Cancelbook";
import RequireAuth from "./components/RequireAuth";
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
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />

        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="userHome">
            <Route index element={<UserHome />} />
            <Route path="cancel" element={<Cancelbook />} />
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
    </Routes>
  );
}

export default App;

