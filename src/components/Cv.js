import React from 'react'
import HeaderCv from './HeaderCv'
import WildCodeSchool from './WildCodeSchool'
import HoLocation from './HoLocation'
import Kdovino from './Kdovino'
import Formation from './Formation'
import Nav from './Nav'
import Footer from './Footer'
import EndFooter from './EndFooter'

import './Cv.css'

const Cv = () => {
  return (
    <div id="CV" className="CV">
      <div className="background_img_cv">
        <Nav />
        <HeaderCv />
      </div>
      <WildCodeSchool />
      <HoLocation />
      <Kdovino />
      <Formation />
      <Footer />
      <EndFooter />
    </div>
  )
}

export default Cv
