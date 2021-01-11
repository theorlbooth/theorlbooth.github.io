import React from 'react'
import bulma from 'bulma'

import Slide from 'react-reveal/Slide'

import PartiCles from './PartiCles'

const Home = () => {
  return <>
    <div id="home">
      <PartiCles />
      <section className="hero is-fullheight" style={{ backgroundColor: '#2a4d69' }}>
        <div className="hero-body" >
          <Slide left>
            <div className="container">
              <h1 className="title" style={{ fontSize: '40px', color: '#35a79c' }}>Theo Booth</h1>
              <h2 className="subtitle" style={{ fontSize: '30px', color: '#35a79c' }}>Junior Software Developer</h2>
            </div>
          </Slide>
        </div>
      </section>
    </div>
  </>
}

export default Home