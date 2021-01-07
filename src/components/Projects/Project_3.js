import React from 'react'

import { HiLink } from 'react-icons/hi'

const Project3 = () => {
  return <>
    <div id="project3">

      <div className="tile is-ancestor">

        <div className="tile is-parent is-vertical">
          <article className="tile is-child notification" style={{ backgroundColor: '#35a79c' }}>
            <div className="content">
              <p className="title">Find-A-Pint</p>
              <p className="subtitle">Project 3</p>
              <div className="content">With all the confusion surrounding the lockdown in England and what people were or were not allowed to do. Our initial idea was to create a website focused on the Public House industry showing which places were open, which places had outdoor seating, where one could get take-away drinks from etc. This quickly developed into something that could be used both during this current confusion and post lockdown, so we tried to include as much information about the sites as possible. We also wanted to make it a more social website than just being able to look up places to drink. We not only wanted friends to be able to communicate and coordinate places to meet and have a drink but also for Pubs to be able to give out information/offers etc to their 'subscribers'. For this we implemented a friend requesting/adding system that works hand in hand with the map in order to give the best userbility on finding a place. And a subscribing/emailing system for landlords to be able to communicate with their customers and keep them up to date with the lastest news/offers.</div>
            </div>
            <div className="links">
              <div className="columns is-multiline is-mobile is-centered" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div className="column is-one-fifth-desktop is-3-mobile"><a href="https://github.com/theorlbooth/Project-3"><i className="devicon-github-original"></i></a></div>
                <div className="column is-one-fifth-desktop is-3-mobile"><a href="https://project-3-theo.herokuapp.com"><HiLink /></a></div>
              </div>
            </div>
          </article>
          <article className="tile is-child is-primary screen_shots">
            <img src="../styles/images/project_3/5.png" alt="Nested Comments" />
          </article>
        </div>

        <div className="tile is-parent is-vertical">
          <article className="tile is-child is-primary screen_shots">
            <img src="../styles/images/project_3/2.png" alt="Map" />
          </article>
          <article className="tile is-child notification" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '20px 30px', backgroundColor: '#35a79c' }}>
            <p className="subtitle" style={{ height: '20%' }}>Main Technologies:</p>

            <div className="links" style={{ height: '80%' }}>
              <div className="columns is-multiline is-mobile is-centered" style={{ display: 'flex' }}>
                <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-javascript-plain"></i><div className="name">JavaScript</div></div>
                <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-react-original"></i><div className="name">React</div></div>
                <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-express-original"></i><div className="name">Express</div></div>
                <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-heroku-original"></i><div className="name">Heroku</div></div>
                <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-mongodb-plain"></i><div className="name">MongoDB</div></div>
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
          <article className="tile is-child is-primary screen_shots">
            <img src="../styles/images/project_3/4.png" alt="Admin Page" />
          </article>

        </div>

        <div className="tile is-parent is-vertical">
          <article className="tile is-child is-primary screen_shots">
            <img src="../styles/images/project_3/3.png" alt="Single Pub" />
          </article>
          <article className="tile is-child is-primary screen_shots">
            <img src="../styles/images/project_3/1.png" alt="Register" />
          </article>
        </div>

      </div>
    </div>
  </>
}

export default Project3