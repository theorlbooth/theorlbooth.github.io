import React from 'react'

import { SiMicrosoftexcel, SiFlask } from 'react-icons/si'

import Rotate from 'react-reveal/Rotate'

const Skills = () => {
  return <>
    <div id="skills" style={{ backgroundColor: '#35a79c', paddingBottom: '30px' }}>
      <div className="current">
        <h2>Current Skills</h2>
        <div className="columns is-multiline is-mobile is-centered">
          <Rotate top left>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-babel-plain"></i><div className="name">Babel</div></div>
          </Rotate>
          <Rotate top left>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-css3-plain"></i><div className="name">CSS3</div></div>
          </Rotate>
          <Rotate top left>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-express-original"></i><div className="name">Express</div></div>
          </Rotate>
          <Rotate top left>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-git-plain"></i><div className="name">Git</div></div>
          </Rotate>
          <Rotate top left>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-github-original"></i><div className="name">GitHub</div></div>
          </Rotate>
          <Rotate top left>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-heroku-original"></i><div className="name">Heroku</div></div>
          </Rotate>
          <Rotate top left>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-html5-plain"></i><div className="name">HTML5</div></div>
          </Rotate>
          <Rotate top left>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-javascript-plain"></i><div className="name">JavaScript</div></div>
          </Rotate>
          <Rotate top left>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-mongodb-plain"></i><div className="name">MongoDB</div></div>
          </Rotate>
          <Rotate top left>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-nodejs-plain"></i><div className="name">NodeJS</div></div>
          </Rotate>
          <Rotate top left>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-npm-original-wordmark"></i><div className="name">npm</div></div>
          </Rotate>
          <Rotate top left>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-postgresql-plain"></i><div className="name">PostgrSQL</div></div>
          </Rotate>
          <Rotate top left>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-python-plain"></i><div className="name">Python</div></div>
          </Rotate>
          <Rotate top left>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-react-original"></i><div className="name">React</div></div>
          </Rotate>
          <Rotate top left>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-sass-original"></i><div className="name">SASS</div></div>
          </Rotate>
          <Rotate top left>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-visualstudio-plain"></i><div className="name">VSCode</div></div>
          </Rotate>
          <Rotate top left>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-webpack-plain"></i><div className="name">Webpack</div></div>
          </Rotate>
          <Rotate top left>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><SiMicrosoftexcel /><div className="name">Excel</div></div>
          </Rotate>
          <Rotate top left>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><SiFlask /><div className="name">Flask</div></div>
          </Rotate>
        </div>
      </div>
      <div className="center"></div>
      <div className="learning">
        <h2>Learning</h2>
        <div className="columns is-multiline is-mobile is-centered">
          <Rotate top right>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-amazonwebservices-original"></i><div className="name">Amazon Web Services</div></div>
          </Rotate>
          <Rotate top right>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-bootstrap-plain"></i><div className="name">Bootstrap</div></div>
          </Rotate>
          <Rotate top right>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-csharp-plain"></i><div className="name">C#</div></div>
          </Rotate>
          {/* <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-mocha-plain"></i><div className="name">Mocha</div></div> */}
          <Rotate top right>
            <div className="column is-one-fifth-desktop is-one-third-mobile"><i className="devicon-ruby-plain"></i><div className="name">Ruby</div></div>
          </Rotate>
        </div>
      </div>

    </div>
  </>

}

export default Skills