import React from 'react'

import Slide from 'react-reveal/Slide'

const Navbar = () => {
  return <>
    <nav className="navbar is-fixed-top is-spaced" style={{ backgroundColor: '#2a4d69' }}>
      <Slide left>
        <div className="navbar-brand" style={{ fontSize: '20px', display: 'flex', alignItems: 'center', color: '#35a79c' }}>
          THEORLBOOTH.CO.UK
        </div>
      </Slide>
      <Slide right>
        <div className="navbar-menu">
          <div className="navbar-end" style={{ fontSize: '20px', color: '#35a79c' }}>
            <a href="#home" className="navbar-item" style={{ color: '#35a79c' }}>Home</a>
            <a href="#about-skills" className="navbar-item" style={{ color: '#35a79c' }}>About/Skills</a>
            {/* <a href="#about" className="navbar-item" style={{ color: '#35a79c' }}>Skills</a> */}
            <a href="#projects" className="navbar-item" style={{ color: '#35a79c' }}>Projects</a>
            <a href="#contact" className="navbar-item" style={{ color: '#35a79c' }}>Contact</a>
          </div>
        </div>
      </Slide>
    </nav>
  </>
}

export default Navbar