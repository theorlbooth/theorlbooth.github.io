import React from 'react'

import { SiMailDotRu } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return <>
    <div id="contact" style={{ backgroundColor: '#35a79c', padding: '2% 0%' }}>
      <div className="columns is-multiline is-mobile is-centered">
        <div className="column is-one-fifth-desktop is-3-mobile"><a href="https://www.linkedin.com/in/theorlbooth/"><FaLinkedin /></a></div>
        <div className="column is-one-fifth-desktop is-3-mobile"><a href="https://github.com/theorlbooth"><i className="devicon-github-original"></i></a></div>
        <div className="column is-one-fifth-desktop is-3-mobile"><a href="mailto:theorlbooth@googlemail.com"><SiMailDotRu /></a></div>
      </div>
    </div>
  </>

}

export default Contact