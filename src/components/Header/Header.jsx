import React, { useState } from 'react'
import Search from '../Search/Search'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleSearch = (searchQuery) => {
    console.log('Search query:', searchQuery)
    // Perform the search logic or pass the search query to the parent component
  }

  return (
    <header style={{ backgroundColor: 'blueviolet', padding: '0 2rem' }}>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/" style={{ color: 'white' }}>
          NIGHT_STREAMERS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarSupportedContent"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          style={{ backgroundColor: 'white', border: 'none' }}
        >
          <span
            className="navbar-toggler-icon"
            style={{ color: 'white' }}
          ></span>
        </button>

        <div
          className={`collapse navbar-collapse${isMenuOpen ? ' show' : ''}`}
          id="navbarSupportedContent"
        >
          <div className="d-flex justify-content-center w-100">
            <ul
              className="navbar-nav mb-2 mb-lg-0"
              style={{ gap: '3rem', color: 'white' }}
            >
              <li className="nav-item">
                <a className="nav-link active" href="index.html">
                  <span style={{ color: 'white' }}>Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="profile.html">
                  <span style={{ color: 'white' }}>Profile</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="login.html">
                  <span style={{ color: 'white' }}>Login</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="register.html">
                  <span style={{ color: 'white' }}>Register</span>
                </a>
              </li>
            </ul>
          </div>
          <Search handleSearch={handleSearch} />
        </div>
      </nav>
    </header>
  )
}

export default Header
