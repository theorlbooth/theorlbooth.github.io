import React from 'react'


const Skills = () => {
  return <>
    <div id="skills" style={{ backgroundColor: '#35a79c', paddingBottom: '30px' }}>
      <div className="current">
        <h2>Current Skills</h2>
        <div className="columns is-multiline is-mobile is-centered">
          <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-babel-plain"></i><div className="name">Babel</div></div>
          <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-css3-plain"></i><div className="name">CSS3</div></div>
          <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-express-original"></i><div className="name">Express</div></div>
          <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-git-plain"></i><div className="name">Git</div></div>
          <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-github-original"></i><div className="name">GitHub</div></div>
          <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-heroku-original"></i><div className="name">Heroku</div></div>
          <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-html5-plain"></i><div className="name">HTML5</div></div>
          <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-javascript-plain"></i><div className="name">JavaScript</div></div>
          <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-mongodb-plain"></i><div className="name">MongoDB</div></div>
          <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-nodejs-plain"></i><div className="name">NodeJS</div></div>
          <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-npm-original-wordmark"></i><div className="name">npm</div></div>
          <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-postgresql-plain"></i><div className="name">PostgrSQL</div></div>
          <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-python-plain"></i><div className="name">Python</div></div>
          <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-react-original"></i><div className="name">React</div></div>
          <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-sass-original"></i><div className="name">SASS</div></div>
          <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-visualstudio-plain"></i><div className="name">VSCode</div></div>
          <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-webpack-plain"></i><div className="name">Webpack</div></div>
        </div>
      </div>
      <div className="center" style={{ width: '1px', border: '1px solid #4a4a4a', margin: '100px 0 80px 0' }}></div>
      <div className="learning">
        <h2>Learning</h2>
        <div className="columns is-multiline is-mobile is-centered">
          <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-amazonwebservices-original"></i><div className="name">Amazon Web Services</div></div>
          <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-bootstrap-plain"></i><div className="name">Bootstrap</div></div>
          <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-csharp-plain"></i><div className="name">C#</div></div>
          {/* <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-mocha-plain"></i><div className="name">Mocha</div></div> */}
          <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-ruby-plain"></i><div className="name">Ruby</div></div>
        </div>
      </div>

    </div>
  </>

}

export default Skills