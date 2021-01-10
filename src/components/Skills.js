import React from 'react'

import { SiMicrosoftexcel, SiFlask } from 'react-icons/si'

import Fade from 'react-reveal/Fade'

const Skills = () => {
  return <>
    <div id="skills" style={{ backgroundColor: '#35a79c', paddingBottom: '30px' }}>
      <div className="current">
        <h2>Current Skills</h2>
        <div className="columns is-multiline is-mobile is-centered">
          <Fade bottom>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-babel-plain"></i><div className="name">Babel</div></div>
          </Fade>
          <Fade bottom>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-css3-plain"></i><div className="name">CSS3</div></div>
          </Fade>
          <Fade bottom>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-express-original"></i><div className="name">Express</div></div>
          </Fade>
          <Fade bottom>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-git-plain"></i><div className="name">Git</div></div>
          </Fade>
          <Fade bottom>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-github-original"></i><div className="name">GitHub</div></div>
          </Fade>
          <Fade bottom>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-heroku-original"></i><div className="name">Heroku</div></div>
          </Fade>
          <Fade bottom>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-html5-plain"></i><div className="name">HTML5</div></div>
          </Fade>
          <Fade bottom>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-javascript-plain"></i><div className="name">JavaScript</div></div>
          </Fade>
          <Fade bottom>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-mongodb-plain"></i><div className="name">MongoDB</div></div>
          </Fade>
          <Fade bottom>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-nodejs-plain"></i><div className="name">NodeJS</div></div>
          </Fade>
          <Fade bottom>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-npm-original-wordmark"></i><div className="name">npm</div></div>
          </Fade>
          <Fade bottom>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-postgresql-plain"></i><div className="name">PostgrSQL</div></div>
          </Fade>
          <Fade bottom>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-python-plain"></i><div className="name">Python</div></div>
          </Fade>
          <Fade bottom>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-react-original"></i><div className="name">React</div></div>
          </Fade>
          <Fade bottom>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-sass-original"></i><div className="name">SASS</div></div>
          </Fade>
          <Fade bottom>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-visualstudio-plain"></i><div className="name">VSCode</div></div>
          </Fade>
          <Fade bottom>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-webpack-plain"></i><div className="name">Webpack</div></div>
          </Fade>
          <Fade bottom>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><SiMicrosoftexcel /><div className="name">Excel</div></div>
          </Fade>
          <Fade bottom>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><SiFlask /><div className="name">Flask</div></div>
          </Fade>
        </div>
      </div>
      <div className="center"></div>
      <div className="learning">
        <h2>Learning</h2>
        <div className="columns is-multiline is-mobile is-centered">
          <Fade bottom>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-amazonwebservices-original"></i><div className="name">Amazon Web Services</div></div>
          </Fade>
          <Fade bottom>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-bootstrap-plain"></i><div className="name">Bootstrap</div></div>
          </Fade>
          <Fade bottom>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-csharp-plain"></i><div className="name">C#</div></div>
          </Fade>
          <Fade bottom>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-ruby-plain"></i><div className="name">Ruby</div></div>
          </Fade>
        </div>
      </div>
    </div>
  </>

}

export default Skills