import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
         < Navbar />
      <h1> Home Page</h1>

      <p>
        To shorten a URL, visit the{' '}
        <Link to="/shorten">
          <strong>URL Shortener</strong>
        </Link>{' '}
        page.
      </p>
    </div>
  )
}

export default Home
