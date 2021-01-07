import React from 'react'

import { SiMailDotRu } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return <>
    <div id="contact" style={{ backgroundColor: 'pink', padding: '2% 0%' }}>
      <div className="columns is-multiline is-mobile is-centered">
        <div className="column is-one-fifth-desktop is-3-mobile"><FaLinkedin /> </div>
        <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-github-original"></i><div className="name">GitHub</div></div>
        <div className="column is-one-fifth-desktop is-3-mobile"><SiMailDotRu /><div className="name">Email</div></div>
      </div>
    </div>
  </>

}

export default Contact