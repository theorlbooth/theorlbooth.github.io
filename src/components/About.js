import React from 'react'

import ProfilePic from '../styles/images/about/1.png'


const About = () => {
  return <>  <div id="about">
    
    <div className="blurb" style={{ textAlign: 'center', color: 'white' }}>My name is Theo, and I am a recent General Assembly Software Engineering Immersive Graduate...</div>
    <img src={ProfilePic} alt="Profile Picture"/>
  </div>
  
  </>
}

export default About 