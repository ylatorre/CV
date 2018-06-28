import React from 'react'
import HeaderCv from './HeaderCv'
import WildCodeSchool from './WildCodeSchool'
import HoLocation from './HoLocation'
import Kdovino from './Kdovino'
import Nav from './Nav'
import Footer from './Footer'
import EndFooter from './EndFooter'

import './Cv.css'

const Cv = () => {
  return (
    <div>
      <div className="background_img_cv">
        <Nav />
        <HeaderCv />
      </div>
      <WildCodeSchool />
      <HoLocation />
      <Kdovino />
      <Footer />
      <EndFooter />
    </div>
  )
}

export default Cv
