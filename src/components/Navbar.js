import React from 'react'

const Navbar = () => {
  return <>
  <nav className="navbar is-fixed-top is-primary is-spaced">
    <div className="navbar-brand" style={{ fontSize: '20px', display: 'flex', alignItems: 'center' }}>
      THEORLBOOTH.CO.UK
    </div>
    <div className="navbar-menu">
      <div className="navbar-end" style={{ fontSize: '20px' }}>
        <a href="#home" className="navbar-item">Home</a>
        <a href="#about" className="navbar-item">About</a>
        <a href="#skills" className="navbar-item">Skills</a>
        <a href="#projects" className="navbar-item">Projects</a>
        <a href="#contact" className="navbar-item">Contact</a>
      </div>
    </div>
  </nav>
  </>
}

export default Navbar