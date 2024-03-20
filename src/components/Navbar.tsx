import React from 'react'
import './HeroSection.css'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
import Page2 from './Page2'

const Navbar = () => {
    // const navigate = useNavigate()

  return (
    <nav>
    <div className="header">
    <div className="logo">
    <Link to='/'> <img src='./assets/Logo.png' alt='logo' /></Link> 
    </div> 
    <div className="frame1000001643">
      <div>My URLs</div>
      <div className="features">
        <div ><Link to='/page-2'> Features</Link>
        </div>
        <img  src="./assets/chevrondown.svg" alt="" />
      </div>
      <div >Pricing</div>
      <div> Analytics</div>
      <div> FAQs</div>
    </div>
    <div className="frame1000001645">
      <div>Log in</div>
      <div className="button5">
        <div >Try for free</div>
        <div className="magic-wand">
          <img className="magic-wand-icon" alt="" src="./assets/magic-wand5.svg" />
        </div>
      </div>
    </div>
  </div>
      </nav>
  )
}

export default Navbar
