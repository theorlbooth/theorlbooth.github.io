import React from 'react'

import { HiLink } from 'react-icons/hi'
import Level1 from '../../styles/images/project_1/1.png'
import Level4GP from '../../styles/images/project_1/2.png'
import Level3GP from '../../styles/images/project_1/3.png'
import BossGP from '../../styles/images/project_1/4.png'
import Rules from '../../styles/images/project_1/5.png'

const Project1 = () => {
  return <>
    <div id="project1">

      <div className="tile is-ancestor">

        <div className="tile is-parent is-vertical">
          <article style={{ backgroundColor: '#35a79c', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} className="tile is-child notification">
            <div className="content">
              <p className="title">Star Invaders</p>
              <p className="subtitle">Project 1</p>
              <div className="content">This was the first project we were assigned on the course and the aim of it was to create a playable game of our choice from a list (Battleships / Candy Crush / Frogger / Minesweeper / Pacman / Reversi / Snake / Space Invaders / Tetris / Ultimate Tic-Tac-Toe) and reder it playable in a browser using DOM-manipulation. This was a solo project and we had 5 days to implement it. I chose to do Space Invaders as I thought it would allow more creative freedom and present more avenues on which to expand.</div>
            </div>
            <div className="links">
              <div className="columns is-multiline is-mobile is-centered" style={{ display: 'flex', justifyContent: 'space-evenly', padding: '2% 0%' }}>
                <div className="column is-one-fifth-desktop is-3-mobile"><a href="https://github.com/theorlbooth/Project_1"><i className="devicon-github-original"></i></a></div>
                <div className="column is-one-fifth-desktop is-3-mobile"><a href="https://theorlbooth.co.uk/Project_1/"><HiLink /></a></div>
              </div>
            </div>
          </article>
          <article className="tile is-child is-primary screen_shots">
            <img src={Level3GP} alt="Level 3 Gameplay" />
          </article>
        </div>

        <div className="tile is-parent is-vertical">
          <article className="tile is-child is-primary screen_shots">
            <img src={Level1} alt="Level 1" />
          </article>
          <article className="tile is-child is-primary screen_shots">
            <img src={Level4GP} alt="Level 4 Gameplay" />
          </article>
          <article className="tile is-child notification" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '20px 30px', backgroundColor: '#35a79c' }}>
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
            <img src={Rules} alt="Rules" />
          </article>
          <article className="tile is-child is-primary screen_shots">
            <img src={BossGP} alt="Boss Gameplay" />
          </article>
        </div>

      </div>
    </div>
  </>
}

export default Project1