import React from 'react'
import LogoSkills from './LogoSkills'

import './MySkills.css'

const MySkills = () => {
  return (
    <div className="container-my-skills">
      <div id="MySkills">
        <br/>
        <br/>
      </div>
      <h2 className="skills-title">Mes compétences à votre service</h2>
      <h3>Créatif, original et moderne, à l'écoute de vos projets</h3>
      <div className="skills">
        <LogoSkills />
      </div>
    </div>
  )
}

export default MySkills
