import React from 'react'

import './Kdovino.css'

const Kdovino = () => {
  return (
    <div className="Kdovino">
      <div id="Kdovi" className="Kdovi">
        <div className="BlockKdovi">
          <div className="DescKdovi">
            <div className="kdo">
              <p>Avril 2006 - Mars 2009</p>
              <h2 className="KdovinoTitle">Responsable  développement </h2>
              <h3>Commercialisation de cartes cadeaux dans le     domaine du vin (b to b).</h3>
              <ul>
                <li>Développement commercial : prospection, prise  de   rendez-vous, négociation commerciale.</li>
                <li>Suivi commercial des clients.</li>
                <li>Gestion des RH : Recrutement et gestion de  CDD  en saison (jusqu’a
                    7).</li>
                <li>Gestion des stocks : suivi du niveau de   stocks,   gestion de
                    l’approvisionnement, bonne tenue du dépôt.</li>
              </ul>
            </div>
            <div className="ImgKdo">
              <img className="ImgVin" src={ require('../img/red-wine-1004255_1920.jpg') } alt="tente"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kdovino
