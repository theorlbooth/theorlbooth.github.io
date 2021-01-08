import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './styles/style_2.scss'
import 'react-alice-carousel/lib/alice-carousel.css'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About_2 from './components/About_2'


const App = () => {
  return <>
  {/* *** Under Construction ***  */}
  <Navbar />
  <Home />
  <About_2 />
  {/* <Skills /> */}
  <Projects />
  <Contact />

  </>
}

export default App