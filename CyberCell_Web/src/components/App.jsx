import "./App.css";
import Hero from "./Hero";
import Games from "./Games";
import React from "react";
import Members from "./Members/Members.jsx";
import Login from "./Login/Login";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header/header";
import Footer from "./Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={Hero} />
        <Route path="/games" Component={Games} />
        <Route path="/login" Component={Login} />
        <Route path="/hacktivists" Component={Members} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
