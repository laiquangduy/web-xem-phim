import React from "react";
import Navbar from "./components/Navbar";
import Slidemovie from "./components/Slidemovie";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";
import MovieList from "./components/Newitems";

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
          <Route path='/' exact />
          </Routes>
          <Slidemovie/>
          <MovieList/>
          <Footer/>
        
      </Router>
    </>
  );
}

export default App;
