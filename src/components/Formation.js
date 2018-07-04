import React from 'react'
import './Formation.css'

const Formation = () => {
  return (
    <div className="ContainerFormation">
      <div className="ParaFormation">
        <h2 className="FormationTitle">Compétences complémentaires</h2>
        <h3>Informatique :</h3>
          <p>Pratique courante : Word, Excel, Power-Point / Environnement Windows et Mac</p>
          <p>Bonne connaissances : Photoshop, Adobe Premier, CMS Wordpress</p>
        <h3>Formation :</h3>
          <p>2000 - 2003 : IDRAC BTS Action commerciale</p>
          <p>1999 - 2000 : Baccalauréat ES</p>
        <h3>Centre d'intérêts :</h3>
          <p>Nouvelles téchnologie, photo, footing, cuisine</p>
      </div>
    </div>
  )
}

export default Formation