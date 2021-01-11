import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import 'normalize.css'
// import 'react-alice-carousel/lib/alice-carousel.css'
import 'react-multi-carousel/lib/styles.css'
import './styles/style.scss'




import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About-Skills'



const App = () => {
  return <>
  <Navbar />
  <Home />
  <About />
  <Projects />
  <Contact />
  </>
}

export default App