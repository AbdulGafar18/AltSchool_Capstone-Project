import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1> Welcome to the Home Page</h1>

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
