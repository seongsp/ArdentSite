import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Background from "./components/Background/Background";
import NavBar from './components/NavBar/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
        <Background />
        <NavBar />
    </div>
  );
}

export default App;