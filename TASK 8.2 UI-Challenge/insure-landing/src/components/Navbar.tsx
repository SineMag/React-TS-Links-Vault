import React from "react";
import Image from "/Users/Trainee/Documents/task-8.2-ui-challenge/src/assets/insure-landing-page-master/images/logo.svg"

function Navbar() {
  return (
    <nav className="navigation" >
      <div className="container navigation__menu" style={{
        display:'flex',
        flexDirection: 'row',
        justifyContent:'end'
    }}>
        <a href="#">
<img src={Image} alt="Insure logo" className="menu-logo" style={{

    width: '250px',
    padding: '5%'
}}/>
        </a>
        <input id="toggle" type="checkbox" />
        <label htmlFor="toggle" className="menu-icon"></label>
        <ul className="menu-links">
          <li><a href="#">How we work</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Account</a></li>
          <li className="plans"><a href="#" className="cta cta--nav">View plans</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
