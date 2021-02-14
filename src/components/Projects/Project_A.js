import React from 'react'

import { HiLink } from 'react-icons/hi'

import Pic1 from '../../styles/images/project_x/1.png'
import Pic2 from '../../styles/images/project_x/2.png'
import Pic5 from '../../styles/images/project_x/5.png'
import Pic6 from '../../styles/images/project_x/6.png'
import PicJoin from '../../styles/images/project_x/Join.png'
import Pic7 from '../../styles/images/project_x/5.1.png'
import Graph1 from '../../styles/images/project_x/Graph_1.png'
import Graph2 from '../../styles/images/project_x/Graph_3.png'

const ProjectA = () => {
  return <>
    <div id="projectA">

      <div className="tile is-ancestor">

        <div className="tile is-parent is-vertical">
          <article className="tile is-child notification" style={{ backgroundColor: '#35a79c', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div className="content">
              <p className="title">@Admin</p>
              <p className="subtitle">Ongoing Solo Project</p>
              <div className="content">The idea with this project is to create an admin page that I can launch when opening a browser or turning on my computer and have everything I want to catch up on in one place rather than having to jump around. This is an ongoing project for which I am using a MERN stack.<br></br><br></br>Current working elements:<br></br><br></br>- Weather 'app' (defaulted to home addresss, but can search by city). Weather available for next 7 days and next 24h.<br></br>- Premier League table - up to date Premier league table.<br></br>- Run traker. Graphs to track distance and speed.</div>
            </div>
            <div className="links">
              <div className="columns is-multiline is-mobile is-centered" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div className="column is-one-fifth-desktop is-one-third-mobile"><a href="https://github.com/theorlbooth/Project-Admin" target="_blank" rel="noreferrer"><i className="devicon-github-original"></i></a></div>
                {/* <div className="column is-one-fifth-desktop is-one-third-mobile"><HiLink /><div className="name">Link to Site</div></div> */}
              </div>
            </div>
          </article>
          <article className="tile is-child is-primary screen_shots box">
            <img src={Pic1} alt="Next 7 Days" />
          </article>
        </div>

        <div className="tile is-parent is-vertical">
          <article className="tile is-child is-primary screen_shots box box">
            <img src={Graph2} alt="Graph" />
          </article>
          <article className="tile is-child is-primary screen_shots box">
            <img src={PicJoin} alt="Lisbon/Shanghai" />
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
            <img src={Pic6} alt="League Table" />
          </article>
          <article className="tile is-child is-primary screen_shots box">
            <img src={Pic7} alt="Next 24h" />
          </article>
          <article className="tile is-child is-primary screen_shots box">
            <img src={Pic2} alt="Home" />
          </article>
        </div>

      </div>
    </div>
  </>
}

export default ProjectA