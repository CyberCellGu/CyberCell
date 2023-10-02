import "./App.css";
import Hero from "./Hero";
import Games from "./Games";
import React from 'react';
import Members from "./Members/Members.jsx"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Hero}/>
        
        <Route path="/games"  Component={Games}/>
       
       
      </Routes>
    </Router>  
  );
}

export default App;
