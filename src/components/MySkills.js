import React from 'react'

import './MySkills.css'

const MySkills = () => {
  return (
    <div id="MySkills" className="MySkills">
      <h2 className="SkillsTitle">Mes compétences à votre service</h2>
      <h3>Créatif, original et moderne, à l'écoute de vos projets</h3>
      <div className="Skils">
        <ul>
          <h3>Front-End</h3>
          <li>Html</li>
          <li>Css</li>
          <li>React JS</li>
          <li>Bootstrap</li>
          <li>Matrial UI / Semantic UI</li>
        </ul>
        <ul>
          <h3>Back-End</h3>
          <li>Node JS</li>
          <li>Express</li>
        </ul>
        <ul>
          <h3>Base de données</h3>
          <li>MySQL</li>
          <li>MongoDB</li>
        </ul>
        <ul>
          <h3>Outils</h3>
          <li>Git</li>
          <li>GitHub</li>
          <li>Photoshop</li>
          <li>Wordpress</li>
        </ul>
      </div>
    </div>
  )
}

export default MySkills
