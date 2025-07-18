// import logo from './logo.svg';
// import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import React from "react";
import {Routes, Route, Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Home>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}>
          <Route path="/about" element={<About />}>
          </Route>
        </Routes>
      </Home>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
