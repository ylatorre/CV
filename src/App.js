import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import Cv from './components/Cv'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import MySkills from './components/MySkills'

class App extends Component {
  render () {
    return (
      <div >
        <div className="background_img">
          <Header />
        </div>
        <AboutMe />
        <MySkills />
        <Cv />
        <Footer />
      </div>
    )
  }
}

export default App
