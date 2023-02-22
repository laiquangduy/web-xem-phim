import React from "react";
import './Signin.css'
function Signin() {
  return (
    <><div className="container-form-background">
      <div className="container-signin">
        <div className="form-container"><img src="http://flixgo.volkovdesign.com/main/img/logo.svg" alt="" /></div>
        <form action=''>
          <div>
            <input type='email' className="email" placeholder='Email' />
          </div>
          <div>
            <input type='password' className="password" placeholder='Password' />
          </div>
           <div><input type="checkbox" /> <span>Remember Me</span></div>
          <button type='submit' className="btn-signin">SIGN IN</button>
        </form>
        <div>Don't have an account? <span className="btn-signup">Sign up!</span> </div>
        <div className="btn-signup">Forgot password?</div>
      </div>
      </div>
    </>
  );
}

export default Signin;
