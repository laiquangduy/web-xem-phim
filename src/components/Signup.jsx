import React from "react";
import './Signin.css'
function Signup() {
  return (
    <><div className="container-form-background">
      <div className="container-signin">
        <div className="form-container"><img src="http://flixgo.volkovdesign.com/main/img/logo.svg" alt="" /></div>
        <form action=''>
        <div>
            <input type='text' className="email" placeholder='Name' />
          </div>
          <div>
            <input type='email' className="email" placeholder='Email' />
          </div>
          <div>
            <input type='password' className="password" placeholder='Password' />
          </div>
           <div><input type="checkbox" /> <span>I agree to the Privacy Policy</span></div>
          <button type='submit' className="btn-signin">SIGN UP</button>
        </form>
        <div>Already have an account? <span className="btn-signup">Sign in!</span> </div>
       
      </div>
      </div>
    </>
  );
}

export default Signup;
