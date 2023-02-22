import React from "react";
import Navbar from "./components/Navbar";
import Slidemovie from "./components/Slidemovie";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";
import MovieList from "./components/Newitems";
import Testccol from "./components/Testccol";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Partners from "./components/Partners";


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
          <Testccol/>
          <Signin/>
          <Signup/>
          <Partners/>
          <Footer/>
        
      </Router>
    </>
  );
}

export default App;
