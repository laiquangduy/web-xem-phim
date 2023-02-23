import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveToLocalStorage } from "./utils";
import { Link } from "react-router-dom";

import "./Signin.css";
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, password };
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      alert("User already exists");
      return;
    }
    const updatedUsers = [...users, newUser];
    saveToLocalStorage("users", updatedUsers);
    alert("Registration successful");
    history.push("/");
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
                type='text'
                className='email'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
              <input type='checkbox' />{" "}
              <span>I agree to the Privacy Policy</span>
            </div>
            <button type='submit' className='btn-signin'>
              SIGN UP
            </button>
          </form>
          <div>
            Already have an account?{" "}
            <span className='btn-signup'>
              <Link to='/login'>Sign in!</Link>
            </span>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
