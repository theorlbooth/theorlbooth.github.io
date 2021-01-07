import React from 'react'

import { HiLink } from 'react-icons/hi'

const Project2 = () => {
  return <>
    <div id="project2">

      <div className="tile is-ancestor">

        <div className="tile is-parent is-vertical">
          <article className="tile is-child notification is-primary">
            <div className="content">
              <p className="title">Music Worldwide</p>
              <p className="subtitle">Project 2</p>
              <div className="content">This was a pair hackathon with a 48h time limit.<br></br><br></br>Music Worldwide is a platform to discover music from around the world and subsequently information about the artists and recent news articles they have appeared in.<br></br><br></br>Focusing on the Top10 tracks from countries around the world the user is able to view the top songs and listen to 30 seconds of the track before finding out about the artist.</div>
            </div>
            <div className="links">
              <div className="columns is-multiline is-mobile is-centered" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-github-original"></i><div className="name">GitHub</div></div>
                <div className="column is-one-fifth-desktop is-3-mobile"><HiLink /><div className="name">Link to Site</div></div>
              </div>
            </div>
          </article>
          <article className="tile is-child is-primary screen_shots">
            <img src="../styles/images/project_2/3.png" alt="Filter Screenshot" />
          </article>
        </div>

        <div className="tile is-parent is-vertical">
          <article className="tile is-child is-primary screen_shots">
            <img src="../styles/images/project_2/2.png" alt="Home Screenshot" />
          </article>
          <article className="tile is-child is-primary screen_shots">
            <img src="../styles/images/project_2/4.png" alt="Artist Search" />
          </article>
          <article className="tile is-child notification is-primary" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '20px 30px' }}>
            <p className="subtitle" style={{ height: '20%' }}>Main Technologies:</p>

            <div className="links" style={{ height: '80%' }}>
              <div className="columns is-multiline is-mobile is-centered" style={{ display: 'flex' }}>
                <div className="column is-one-third-desktop is-3-mobile"><i className="devicon-javascript-plain"></i><div className="name">JavaScript</div></div>
                <div className="column is-one-third-desktop is-3-mobile"><i className="devicon-react-original"></i><div className="name">React</div></div>
                <div className="column is-one-third-desktop is-3-mobile"><i className="devicon-html5-plain"></i><div className="name">HTML5</div></div>
                <div className="column is-one-third-desktop is-3-mobile"><i className="devicon-css3-plain"></i><div className="name">CSS3</div></div>
                <div className="column is-one-third-desktop is-3-mobile"><i className="devicon-npm-original-wordmark"></i><div className="name">npm</div></div>
                <div className="column is-one-third-desktop is-3-mobile"><i className="devicon-git-plain"></i><div className="name">Git</div></div>
                <div className="column is-one-third-desktop is-3-mobile"><i className="devicon-github-original"></i><div className="name">GitHub</div></div>
              </div>

            </div>
          </article>
        </div>

        <div className="tile is-parent is-vertical">
          <article className="tile is-child is-primary screen_shots">
            <img src="../styles/images/project_2/5.png" alt="Artist Result" />
          </article>
          <article className="tile is-child is-primary screen_shots">
            <img src="../styles/images/project_2/1.png" alt="Search" />
          </article>
        </div>

      </div>
    </div>
  </>
}

export default Project2