import React from 'react'

import { HiLink } from 'react-icons/hi'

const Project1 = () => {
  return <>
    <div id="project1">

      <div className="tile is-ancesstor">

        <div className="tile is-parent is-vertical">
          <article className="tile is-child notification is-primary">
            <div className="content">
              <p className="title">Star Invaders</p>
              <p className="subtitle">Project 1</p>
              <div className="content">This was the first project we were assigned on the course and the aim of it was to create a playable game of our choice from a list (Battleships / Candy Crush / Frogger / Minesweeper / Pacman / Reversi / Snake / Space Invaders / Tetris / Ultimate Tic-Tac-Toe) and reder it playable in a browser using DOM-manipulation. This was a solo project and we had 5 days to implement it. I chose to do Space Invaders as I thought it would allow more creative freedom and present more avenues on which to expand.</div>
            </div>
            <div className="links">
              <div className="columns is-multiline is-mobile is-centered" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div className="column is-one-fifth-desktop is-3-mobile"><i className="devicon-github-original"></i><div className="name">GitHub</div></div>
                <div className="column is-one-fifth-desktop is-3-mobile"><HiLink /><div className="name">Link to Site</div></div>
              </div>
            </div>
          </article>
          <article className="tile is-child is-primary screen_shots">
            <img src="../styles/images/project_1/GP_Level3.png" alt="Level 3 Gameplay" />
          </article>
        </div>

        <div className="tile is-parent is-vertical">
          <article className="tile is-child is-primary screen_shots">
            <img src="../styles/images/project_1/Level_1.png" alt="Level 1" />
          </article>
          <article className="tile is-child is-primary screen_shots">
            <img src="../styles/images/project_1/GP_Level_4.2.png" alt="Level 4 Gameplay" />
          </article>
          <article className="tile is-child notification is-primary" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <p className="subtitle" style={{ height: '20%' }}>Main Technologies:</p>

            <div className="links" style={{ height: '80%' }}>
              <div className="columns is-multiline is-mobile is-centered" style={{ display: 'flex' }}>
                <div className="column is-one-third-desktop is-3-mobile"><i className="devicon-javascript-plain"></i><div className="name">JavaScript</div></div>
                <div className="column is-one-third-desktop is-3-mobile"><i className="devicon-html5-plain"></i><div className="name">HTML5</div></div>
                <div className="column is-one-third-desktop is-3-mobile"><i className="devicon-css3-plain"></i><div className="name">CSS3</div></div>
                <div className="column is-one-third-desktop is-3-mobile"><i className="devicon-git-plain"></i><div className="name">Git</div></div>
                <div className="column is-one-third-desktop is-3-mobile"><i className="devicon-github-original"></i><div className="name">GitHub</div></div>
              </div>

            </div>
          </article>
        </div>

        <div className="tile is-parent is-vertical">
          <article className="tile is-child is-primary screen_shots">
            <img src="../styles/images/project_1/Rules.png" alt="Rules" />
          </article>
          <article className="tile is-child is-primary screen_shots">
            <img src="../styles/images/project_1/GP_Boss.png" alt="Boss Gameplay" />
          </article>
        </div>

      </div>
    </div>
  </>
}

export default Project1