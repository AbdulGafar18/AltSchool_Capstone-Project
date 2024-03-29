import React from "react";
// import './HeroSection.css'
import { Link } from "react-router-dom";
import "./Navbar.css";
import { HashLink } from "react-router-hash-link";


function Navbar () {
  return (
    <nav>
      <div className="logo">
        <img src="./assets/Vector.jpg" alt="vector" />
        <div className="divider"></div>
        <h2>SCISSOR</h2>
      </div>
      <div className="nav-links">
        <HashLink to="/#page-4"> My URLs</HashLink>
        <HashLink to="/#page-2"> Features</HashLink>
        <HashLink to="/#page-3"> Pricing</HashLink>     
        <HashLink to="/#page-6"> Analytics</HashLink>
        <HashLink to="/#page-5">FAQs</HashLink>
      </div>
      <div className="nav-btns">
        <button><HashLink to='/#SignIn'>Log In</HashLink></button>
        <button><HashLink to='/#SignUp'>Try for Free </HashLink></button>
      </div>
    </nav>
  )
}

export default Navbar
