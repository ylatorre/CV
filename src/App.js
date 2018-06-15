import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import MySkills from './components/MySkills'
import EndFooter from './components/EndFooter'

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
        <EndFooter />
      </div>
    )
  }
}

export default App
