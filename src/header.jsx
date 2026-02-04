import React from 'react'
import logo from './assets/Connectorlogo.PNG'
import './Header.css'

function Header() {
  return (
    <header className="sticky-header">
      <div className="header-left">
        <img src={logo} alt="Connector Logo" className="header-logo" />
        <span className="header-title">UCSD Club Connect</span>  {/* Changed h1 to span */}
      </div>
      <nav className="header-nav">
        <a href="#home">Home</a>
        <a href="#clubs">Clubs</a>
        <a href="#events">Events</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Header