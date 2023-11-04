import { useState } from "react";
import "./App.css";

import About from "./About";

function App() {
  return (
    <div className="App">
      <About />
    </div>
import Hero from "./Hero";
import Games from "./Games";
import React from "react";
import Members from "./Members/Members.jsx";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Event from "./Events/Events";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header/header";
import Footer from "./Footer/Footer";
import BackToTop from "./BackToTop";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Hero} />
          <Route path="/games" Component={Games} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Register} />
          <Route path="/hacktivists" Component={Members} />
          <Route path="/event" Component={Event} />
        </Routes>
      </Router>
      <BackToTop />
    </>
  );
}

export default App;
