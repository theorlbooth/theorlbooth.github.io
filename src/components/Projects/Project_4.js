import React from 'react'

import { HiLink } from 'react-icons/hi'

const Project4 = () => {
  return <>
    <div id="project4">

      <div className="tile is-ancestor">

        <div className="tile is-parent is-vertical">
          <article className="tile is-child notification" style={{ backgroundColor: '#35a79c' }}>
            <div className="content">
              <p className="title">Travel Explorer</p>
              <p className="subtitle">Project 4</p>
              <div className="content">The final project at GA was to create a full-stack web application. This two-person, week-long project utilised a Python Flask RESTful API. TravelExplorer allows users to navigate the world, exploring new cities and find some new places and even suggest an itinerary for specified dates. User functionality allows the creation of travel wish-lists, and comments and reviews. The idea was born out of a mutual love for travel and frustration with the lack of user interaction with travel websites, specifically as a place to plan a trip!</div>
            </div>
            <div className="links">
              <div className="columns is-multiline is-mobile is-centered" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div className="column is-one-fifth-desktop is-3-mobile"><a href="https://github.com/theorlbooth/Project-4"><i className="devicon-github-original"></i></a></div>
                <div className="column is-one-fifth-desktop is-3-mobile"><a href="https://project-project-4.herokuapp.com/"><HiLink /></a></div>
              </div>
            </div>
          </article>
          <article className="tile is-child is-primary screen_shots">
            <img src="../styles/images/project_4/2.png" alt="Single Place" />
          </article>
        </div>

        <div className="tile is-parent is-vertical">
          <article className="tile is-child is-primary screen_shots">
            <img src="../styles/images/project_4/5.png" alt="Trip Planner" />
          </article>

          
          <article className="tile is-child notification" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '20px 30px', backgroundColor: '#35a79c' }}>
            <p className="subtitle" style={{ height: '20%' }}>Main Technologies:</p>

            <div className="links" style={{ height: '80%' }}>
              <div className="columns is-multiline is-mobile is-centered" style={{ display: 'flex' }}>
                <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-javascript-plain"></i><div className="name">JavaScript</div></div>
                <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-react-original"></i><div className="name">React</div></div>
                <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-python-plain"></i><div className="name">Python</div></div>
                <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-heroku-original"></i><div className="name">Heroku</div></div>
                <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-postgresql-plain"></i><div className="name">PostgrSQL</div></div>
                <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-nodejs-plain"></i><div className="name">NodeJS</div></div>
                <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-webpack-plain"></i><div className="name">Webpack</div></div>
                <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-html5-plain"></i><div className="name">HTML5</div></div>
                <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-css3-plain"></i><div className="name">CSS3</div></div>
                <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-sass-original"></i><div className="name">SASS</div></div>
                <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-npm-original-wordmark"></i><div className="name">npm</div></div>
                <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-git-plain"></i><div className="name">Git</div></div>
                <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-github-original"></i><div className="name">GitHub</div></div>
              </div>

            </div>
          </article>
        </div>

        <div className="tile is-parent is-vertical">
          <article className="tile is-child is-primary screen_shots">
            <img src="../styles/images/project_4/3.png" alt="Folders" />
          </article>
          <article className="tile is-child is-primary screen_shots">
            <img src="../styles/images/project_4/1.png" alt="Search Result" />
          </article>
          <article className="tile is-child is-primary screen_shots">
            <img src="../styles/images/project_4/4.png" alt="Register" />
          </article>
        </div>

      </div>
    </div>
  </>
}

export default Project4