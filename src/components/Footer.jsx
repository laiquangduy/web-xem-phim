import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-3'>
          <h6 className='footer__title'>Download Our App</h6>
          <ul className='footer__app'>
            <li>
              <img
                src='http://flixgo.volkovdesign.com/main/img/Download_on_the_App_Store_Badge.svg'
                alt=''
              />
            </li>
            <li>
              <img className="icon--gp"
                src='http://flixgo.volkovdesign.com/main/img/google-play-badge.png'
                alt=''
              />
            </li>
          </ul>
        </div>
        <div className='col-6 col-sm-4 col-md-3'>
          <h6 className='footer__title'>Resources</h6>
          <ul className='footer__list'>
            <li>
              <a href=''>About Us</a>
            </li>
            <li>
              <a href=''>Pricing Plan</a>
            </li>
            <li>
              <a href=''>Help Center</a>
            </li>
          </ul>
        </div>
        <div className='col-6 col-sm-4 col-md-3'>
          <h6 className='footer__title'>Legal</h6>
          <ul className='footer__list'>
            <li>
              <a href=''>Terms of Use</a>
            </li>
            <li>
              <a href=''>Privacy Policy</a>
            </li>
            <li>
              <a href=''>Security</a>
            </li>
          </ul>
        </div>
        <div className='col-6 col-sm-4 col-md-3'>
          <h6 className='footer__title'>Contact</h6>
          <ul className='footer__list'>
            <li>
              <a href=''>8 800 234 56 78</a>
            </li>
            <li>
              <a href=''>support@flixgo.com</a>
            </li>
          </ul>
          <ul className='footer__social'>
            <li className='facebook'>
              <i class='fa-brands fa-square-facebook'></i>
            </li>
            <li className='instagram'>
              <i class='fa-brands fa-instagram'></i>
            </li>
            <li className='twitter'>
              <i class='fa-brands fa-twitter'></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
