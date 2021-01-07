import React from 'react'

import { HiLink } from 'react-icons/hi'

const ProjectX = () => {
  return <>
    <div id="projectX">

      <div className="tile is-ancestor">

        <div className="tile is-parent is-vertical">
          <article className="tile is-child notification" style={{ backgroundColor: '#35a79c' }}>
            <div className="content">
              <p className="title">@Admin</p>
              <p className="subtitle">Ongoing Solo Project</p>
              <div className="content">The idea with this project is to create an admin page that I can launch when opening a browser or turning on my computer and have everything I want to catch up on in one place rather than having to jump around. This is an ongoing project for which I am using React.</div>
            </div>
            <div className="links">
              <div className="columns is-multiline is-mobile is-centered" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div className="column is-one-fifth-desktop is-3-mobile"><a href="https://github.com/theorlbooth/Project-X"><i className="devicon-github-original"></i></a></div>
                {/* <div className="column is-one-fifth-desktop is-3-mobile"><HiLink /><div className="name">Link to Site</div></div> */}
              </div>
            </div>
          </article>
          <article className="tile is-child is-primary screen_shots">
            <img src="../styles/images/project_x/1.png" alt="Next 7 Days" />
          </article>
        </div>

        <div className="tile is-parent is-vertical">
          <article className="tile is-child is-primary screen_shots">
            <img src="../styles/images/project_x/6.png" alt="Table" />
          </article>
          <article className="tile is-child is-primary screen_shots">
            <img src="../styles/images/project_x/Join.png" alt="Lisbon/Shanghai" />
          </article>
          <article className="tile is-child notification" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '20px 30px', backgroundColor: '#35a79c' }}>
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
            <img src="../styles/images/project_x/5.png" alt="Next 24h" />
          </article>
          <article className="tile is-child is-primary screen_shots">
            <img src="../styles/images/project_x/2.png" alt="Home" />
          </article>
        </div>

      </div>
    </div>
  </>
}

export default ProjectX