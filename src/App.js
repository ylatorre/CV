import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
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
        <Footer />
      </div>
    )
  }
}

export default App
