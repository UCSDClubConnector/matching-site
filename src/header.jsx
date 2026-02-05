import React from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/Connectorlogo.PNG'
import './Header.css'

function Header() {
  return (
    <header className="sticky-header">
      <div className="header-left">
        <img src={logo} alt="Connector Logo" className="header-logo" />
        <span className="header-title">UCSD Group Matcher</span>
      </div>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/clubs">Clubs</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Header