import React, { Component } from 'react'

import Header from './Header'
import Footer from './Footer'
import CitationPres from './CitationPres'
import AboutMe from './AboutMe'
import Citation from './Citation'
import MySkills from './MySkills'
import EndFooter from './EndFooter'
import Nav from './Nav'

class Home extends Component {
  render () {
    return (
      <div className="Header" id="Header">
        <div>
          <div className="background_img">
            <Nav />
            <Header />
          </div>
        </div>
        <CitationPres />
        <AboutMe />
        <MySkills />
        <Citation />
        <Footer />
        <EndFooter />
      </div>
    )
  }
}

export default Home
