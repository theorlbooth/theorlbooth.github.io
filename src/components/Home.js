import React from 'react'
import bulma from 'bulma'

const Home = () => {
  return <>
    <div id="home">
      <section className="hero is-primary is-fullheight">
        {/* <div className="hero-head">
          <header className="navbar is-fixed" style={{ marginRight: '10%' }}>
            <div id="navbarMenuHeroC" className="navbar-menu">
              <div className="navbar-end" style={{ fontSize: '20px' }}>
                <a href="#home" className="navbar-item">Home</a>
                <a href="#about" className="navbar-item">About</a>
                <a href="#skills" className="navbar-item">Skills</a>
                <a href="#projects" className="navbar-item">Projects</a>
                <a href="#contact" className="navbar-item">Contact</a>
              </div>
            </div>
          </header>
        </div> */}
        <div className="hero-body" >
          <div className="container">
            <h1 className="title" style={{ fontSize: '40px' }}>Theo Booth</h1>
            <h2 className="subtitle" style={{ fontSize: '30px' }}>Junior Software Developer</h2>
          </div>
        </div>
        {/* <div className="hero-foot">
          <nav className="tabs">
            <div className="container">
              <ul style={{ fontSize: '20px', fontWeight: 'bold', justifyContent: 'flex-end' }}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </nav>
        </div> */}
      </section>
    </div>
  </>
}

export default Home