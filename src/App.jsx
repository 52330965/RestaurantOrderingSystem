import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";
import YourSelection from "./components/YourSelection";
import Login from "./components/login";
import Register from "./components/register";
import { useState } from "react";
const App = () => {
  const [myOrder,setmyOrders] = useState([]);
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu myOrder={myOrder} setmyOrders={setmyOrders}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/your-selection" element={<YourSelection myOrder={myOrder} setmyOrders={setmyOrders}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
