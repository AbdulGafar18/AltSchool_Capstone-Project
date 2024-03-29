import React from 'react'
import './HeroSection.css'
//import Navbar from './Navbar'
//import { Link } from 'react-router-dom'

const Herosection =() => {
  return (
    <div id="page-1" className="hero-section">
    <div className="myframe-parent">
      <div className="group-parent1">
          <div className="group-1">
           <div className="opt-text">
            <div className="vect-icon"><img className="group-child" src="../assets/vector-3.svg" alt="" /></div>
          </div>
            Optimize Your Online Experience with Our Advanced <strong >URL Shortening</strong>Solution
          </div>
          
      <div className="personalize-your-shortened">
          Personalize your shortened URLs to align with your brand identity.
          Utilize custom slugs, branded links, and domain customization
          options to reinforce your brand presence and enhance user
          engagement.
        </div>
      </div>
      <div className="frame-sig">
        <div className="sug-but">
          <div className="up-but">Sign Up</div>
          <div className="magic-wand4">
            <img className="magic-wand-icon4" src="../assets/magic-wand4.svg" alt=""  />
          </div>
        </div>
        <div className="learn">Learn more</div>
      </div>
    </div>
    <img className="hero-section-child" alt="" src="../assets/elipse.svg" />
    <div className="group2">
      <div className="group-item"><img  alt="" src="../assets/vector-21.svg" /></div>
      <div className="frame29546">
        <div className="frame1000001716">
          <div className="frame-image">
            <img src="./assets/Frame 1000001716.svg" alt="" />
          </div>
      
        </div>
        <div className="seamlessly-transform-your-container">
          Seamlessly transform your long URLs into concise and shareable links with just few clicks.
        </div>
      </div>
    </div>
  </div>
  )
}

export default Herosection
