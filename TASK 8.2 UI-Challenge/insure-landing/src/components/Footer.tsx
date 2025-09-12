import React from "react";
import Image from "/Users/Trainee/Documents/task-8.2-ui-challenge/src/assets/insure-landing-page-master/images/logo.svg"


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <a href="#"><img src={Image} alt="Insure logo" className="menu-logo" />
</a>
          <ul className="icons">
            <li><a href="#">FB</a></li>
            <li><a href="#">TW</a></li>
            <li><a href="#">PT</a></li>
            <li><a href="#">IG</a></li>
          </ul>
        </div>
        <hr />
        <div className="footer__bottom">
          <div className="about">
            <h3>Our company</h3>
            <ul>
              <li><a href="#">How we work</a></li>
              <li><a href="#">Why Insure?</a></li>
              <li><a href="#">View plans</a></li>
              <li><a href="#">Reviews</a></li>
            </ul>
          </div>
          <div className="about">
            <h3>Help me</h3>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Terms of use</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
          <div className="about">
            <h3>Contact</h3>
            <ul>
              <li><a href="#">Sales</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Live chat</a></li>
            </ul>
          </div>
          <div className="about">
            <h3>Others</h3>
            <ul>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Licenses</a></li>
            </ul>
          </div>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;
