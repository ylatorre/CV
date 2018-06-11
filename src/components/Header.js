import React from 'react'
import AsidePres from './AsidePres'
import Nav from './Nav'
import './Header.css'

const Header = () => {
  return (
    <div className="Header">
      <div className="HeaderContent">
        <Nav />
        <AsidePres />
      </div>
    </div>
  )
}

export default Header
