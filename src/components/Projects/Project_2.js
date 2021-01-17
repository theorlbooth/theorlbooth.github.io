import React from 'react'

import { HiLink } from 'react-icons/hi'

import Pic1 from '../../styles/images/project_2/1.png'
import Pic2 from '../../styles/images/project_2/2.png'
import Pic3 from '../../styles/images/project_2/3.png'
import Pic4 from '../../styles/images/project_2/4.png'
import Pic5 from '../../styles/images/project_2/5.png'
import New1 from '../../styles/images/project_2/1.1.png'

const Project2 = () => {
  return <>
    <div id="project2">

      <div className="tile is-ancestor">

        <div className="tile is-parent is-vertical">
          <article className="tile is-child notification" style={{ backgroundColor: '#35a79c', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div className="content">
              <p className="title">Music Worldwide</p>
              <p className="subtitle">Project 2</p>
              <div className="content">This was a pair hackathon with a 48h time limit.<br></br><br></br>Music Worldwide is a platform to discover music from around the world and subsequently information about the artists and recent news articles they have appeared in.<br></br><br></br>Focusing on the Top10 tracks from countries around the world the user is able to view the top songs and listen to 30 seconds of the track before finding out about the artist and any recent features in world news.</div>
            </div>
            <div className="links">
              <div className="columns is-multiline is-mobile is-centered" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div className="column is-one-fifth-desktop is-one-third-mobile"><a href="https://github.com/theorlbooth/Music-Worldwide" target="_blank" rel="noreferrer"><i className="devicon-github-original"></i></a></div>
                <div className="column is-one-fifth-desktop is-one-third-mobile"><a href="https://theorlbooth.co.uk/project-2/" target="_blank" rel="noreferrer"><HiLink /></a></div>
              </div>
            </div>
          </article>
          <article className="tile is-child is-primary screen_shots box">
            <img src={Pic3} alt="Filter Screenshot" />
          </article>
        </div>

        <div className="tile is-parent is-vertical">
          <article className="tile is-child is-primary screen_shots box">
            <img src={Pic2} alt="Home Screenshot" />
          </article>
          <article className="tile is-child is-primary screen_shots box">
            <img src={Pic4} alt="Artist Search" />
          </article>
          <article className="tile is-child notification" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '20px 30px', backgroundColor: '#35a79c' }}>
            <p className="subtitle" style={{ height: '20%' }}>Main Technologies:</p>

            <div className="links" style={{ height: '100%' }}>
              <div className="columns is-multiline is-mobile is-centered" style={{ display: 'flex' }}>
                <div className="column is-one-third-desktop is-one-third-mobile"><i className="devicon-javascript-plain"></i><div className="name">JavaScript</div></div>
                <div className="column is-one-third-desktop is-one-third-mobile"><i className="devicon-react-original"></i><div className="name">React</div></div>
                <div className="column is-one-third-desktop is-one-third-mobile"><i className="devicon-html5-plain"></i><div className="name">HTML5</div></div>
                <div className="column is-one-third-desktop is-one-third-mobile"><i className="devicon-css3-plain"></i><div className="name">CSS3</div></div>
                <div className="column is-one-third-desktop is-one-third-mobile"><i className="devicon-npm-original-wordmark"></i><div className="name">npm</div></div>
                <div className="column is-one-third-desktop is-one-third-mobile"><i className="devicon-git-plain"></i><div className="name">Git</div></div>
                <div className="column is-one-third-desktop is-one-third-mobile"><i className="devicon-github-original"></i><div className="name">GitHub</div></div>
              </div>

            </div>
          </article>
        </div>

        <div className="tile is-parent is-vertical">
          <article className="tile is-child is-primary screen_shots box">
            <img src={Pic5} alt="Artist Result" />
          </article>
          <article className="tile is-child is-primary screen_shots box">
            <img src={New1} alt="Search" />
          </article>
        </div>

      </div>
    </div>
  </>
}

export default Project2