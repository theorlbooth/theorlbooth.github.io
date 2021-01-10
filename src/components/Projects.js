import React from 'react'
// import AliceCarousel from 'react-alice-carousel'
import Slider from 'infinite-react-carousel'

import Project1 from './Projects/Project_1'
import Project2 from './Projects/Project_2'
import Project3 from './Projects/Project_3'
import Project4 from './Projects/Project_4'
import ProjectX from './Projects/Project_X'

const Projects = () => {

  const settings = {
    // autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    initialSlide: true,
    adaptiveHeight: true,
    prevArrow: <div><button className='carousel-button'><span>&#60;</span></button></div>,
    nextArrow: <div><button className='carousel-button'><span>&#62;</span></button></div>
  }

  return <>
    <div id="projects" style={{ backgroundColor: '#2a4d69' }}>
      <Slider {...settings }>
        <div style={{ display: 'inline-block' }}>
          <Project1 />
        </div>
        <div style={{ display: 'inline-block' }}>
          <Project2 />
        </div>
        <div style={{ display: 'inline-block' }}>
          <Project3 />
        </div>
        <div style={{ display: 'inline-block' }}>
          <Project4 />
        </div>
        <div style={{ display: 'inline-block' }}>
          <ProjectX />
        </div>
      </Slider>










      {/* <AliceCarousel
        infinite={true}
        // autoPlay={true}
        autoPlayInterval={5000}
        autoHeight
      >
        <div style={{ display: 'inline-block' }}>
          <Project1 />
        </div>
        <div style={{ display: 'inline-block' }}>
          <Project2 />
        </div>
        <div style={{ display: 'inline-block' }}>
          <Project3 />
        </div>
        <div style={{ display: 'inline-block' }}>
          <Project4 />
        </div>
        <div style={{ display: 'inline-block' }}>
          <ProjectX />
        </div>
      </AliceCarousel> */}
    </div>
  </>

}

export default Projects