import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className="Menu">
      <ul className="MenuList">
        <li><a className="LinksMenu" href="#AboutMe">A propos</a></li>
        <li><a className="LinksMenu" href="MySkills">Compétences</a></li>
        <li><a className="LinksMenu" href="Cv">Cv</a></li>
        <li><a className="LinksMenu" href="fez">Ce site</a></li>
        <li><a className="LinksMenu" href="fez">Contact</a></li>
      </ul>
    </div>
  )
}

export default Nav
