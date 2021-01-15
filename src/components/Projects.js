import React from 'react'
// import AliceCarousel from 'react-alice-carousel'
// import Slider from 'infinite-react-carousel'
import Carousel from 'react-multi-carousel'

import Project1 from './Projects/Project_1'
import Project2 from './Projects/Project_2'
import Project3 from './Projects/Project_3'
import Project4 from './Projects/Project_4'
import ProjectX from './Projects/Project_X'

const Projects = () => {

  // * Infinite-React-Carousel
  // const settings = {
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   dots: true,
  //   initialSlide: true,
  //   adaptiveHeight: true,
  //   prevArrow: <div><button className='carousel-button'><span>&#60;</span></button></div>,
  //   nextArrow: <div><button className='carousel-button'><span>&#62;</span></button></div>
  // }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return <>
    <div id="projects" style={{ backgroundColor: '#2a4d69', height: '100%' }}>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={15000}
        showDots={true}
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
      </Carousel>




      {/* <Slider {...settings }>
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
      </Slider> */}

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