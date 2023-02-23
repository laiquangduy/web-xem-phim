import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFromLocalStorage, saveToLocalStorage } from "./utils";
import { Link } from "react-router-dom";

import "./Signin.css";
function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = getFromLocalStorage("users") || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      saveToLocalStorage("currentUser", user);
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };
  return (
    <>
      <div className='container-form-background'>
        <div className='container-signin'>
          <div className='form-container'>
            <Link to='/'>
              <img
                src='http://flixgo.volkovdesign.com/main/img/logo.svg'
                alt=''
              />
            </Link>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type='email'
                className='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type='password'
                className='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <input type='checkbox' /> <span>Remember Me</span>
            </div>
            <button type='submit' className='btn-signin'>
              SIGN IN
            </button>
          </form>
          <div>
            Don't have an account?{" "}
            <span className='btn-signup'>
              <Link to='/register'>Sign up!</Link>
            </span>
          </div>
          <div className='btn-signup'>Forgot password?</div>
        </div>
      </div>
    </>
  );
}

export default Signin;
