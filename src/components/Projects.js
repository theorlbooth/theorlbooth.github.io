import React from 'react'
// import ReactDOM from 'react-dom'
// import { Carousel } from 'react-responsive-carousel'
import AliceCarousel from 'react-alice-carousel'

import Project1 from './Projects/Project_1'
import Project2 from './Projects/Project_2'
import Project3 from './Projects/Project_3'
import Project4 from './Projects/Project_4'
import ProjectX from './Projects/Project_X'

const Projects = () => {
  return <>
    <div id="projects" style={{ padding: '5% 10%', backgroundColor: 'black' }}>
      <AliceCarousel
        infinite={true}
        // autoPlay={true}
        autoPlayInterval={5000}

      >
        <div>
          <Project1 />
        </div>
        <div>
          <Project2 />
        </div>
        <div>
          <Project3 />
        </div>
        <div>
          <Project4 />
        </div>
        <div>
          <ProjectX />
        </div>
      </AliceCarousel>
    </div>
  </>

}

export default Projects