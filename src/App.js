import React from "react";
import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Code from "./Pages/Code";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="site-wrapper">
      <div className="site-content">
        <Navbar />
        <Routes>
          <Route path="/code" element={<Code />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}