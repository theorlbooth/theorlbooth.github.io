import React from 'react'

import ProfilePic from '../styles/images/about/1.png'


const About = () => {
  return <>  <div id="about">
    
    <div className="blurb" style={{ textAlign: 'center', color: 'white' }}>My name is Theo, and I am a recent General Assembly Software Engineering Immersive Graduate.<br></br><br></br>I have spent the last 6 years working both as a broker and a trader in the shipping industry. And after developing a few tools for internal use to help productivity, I found that I was enjoying the building of these projects more than I was enjoying the day to day work.<br></br><br></br>I started by taking various online courses and found that I was enjoying it more and more. So in September I took the plunge, and enrolled on a full time course.<br></br><br></br></div>
    <img src={ProfilePic} alt="Profile Picture"/>
  </div>
  
  </>
}

export default About 