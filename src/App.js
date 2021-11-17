import React from 'react';
import { Routes, Route  } from "react-router-dom";
import Background from "./components/Background/Background";
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import SoftwareInternPage from './components/SoftwareInternPage/SoftwareInternPage';
import Contact from './components/Contact/Contact';
import Credit from './components/Credit/Credit';
import './App.css';

function App() {
  return (
    <>
    <div id="app">
        <Background />
        <div id="header">
            <NavBar />
        </div>
        <main id="main-content">
            <Routes>
                <Route exact path="software-engineering-remote-interns" element={<SoftwareInternPage/>} />
                <Route exact path="/" element={<HomePage/>} />
            </Routes>
        </main>
        <div id="footer">
            <Contact />
            <Credit />   
        </div>
    </div>
    </>
  );
}

export default App;