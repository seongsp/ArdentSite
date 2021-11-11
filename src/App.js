import React from 'react';
import { Routes, Route  } from "react-router-dom";
import Background from "./components/Background/Background";
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import SoftwareInternPage from './components/SoftwareInternPage/SoftwareInternPage';

import './App.css';

function App() {
  return (
    <div className="App">
        <Background />
        <NavBar />
        <Routes>
            <Route exact path="software-engineering-remote-interns" element={<SoftwareInternPage/>} />
            <Route exact path="/" element={<HomePage/>} />
        </Routes>
    </div>
  );
}

export default App;