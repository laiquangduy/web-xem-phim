import React from "react";
import Navbar from "./components/Navbar";
import Slidemovie from "./components/Slidemovie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";
import MovieList from "./components/Newitems";
import Testccol from "./components/Testccol";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Partners from "./components/Partners";
import Detailmovie from "./components/details/Detailmovie";
import Comment from "./components/Comment";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Navbar />
                <Slidemovie />
                <MovieList />
                <Testccol />
                <Partners />
               
                <Footer />
              </>
            }
          />
          <Route
            path='/login'
            element={
              <>
                <Signin />
              </>
            }
          />
          <Route
            path='register'
            element={
              <>
                <Signup />
              </>
            }
          />
          <Route path='detail' element={<><Navbar /><Detailmovie/><Comment/></>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
