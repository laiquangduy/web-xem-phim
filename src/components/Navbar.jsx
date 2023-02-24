import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import Home from "./dropdown/Home";
import Catalog from "./dropdown/Catalog";
import "./Navbar.css";
import Language from "./dropdown/Language";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            <img
              src='http://flixgo.volkovdesign.com/main/img/logo.svg'
              alt=''
            />
          </Link>
          <ul className='nav-ul'>
            <li>
              <Home />
            </li>
            <li>
              <Catalog />
            </li>
            <li>PRICING</li>
            <li>HELP</li>
          </ul>
          <div className="nav-search">
            <button className="search-icon">
              <i class='fa-solid fa-magnifying-glass'></i>
            </button>
            <Language />
          </div>

          <div>
            <Link to='/login' className='btn--outline'>
              SIGN IN
            </Link>
          </div>
        </div>
        <div className='menu-icon'>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
