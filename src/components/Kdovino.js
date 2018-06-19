import React from 'react'
import Grid from '@material-ui/core/Grid';

import './Kdovino.css'

const Kdovino = () => {
  return (
    <div>
      <Grid container spacing={0} className="Kdovino">
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="DescHoLoc">
          <div className="DescKdo">
            <p>Avril 2006 - Mars 2009</p>
            <h2 className="KdovinoTitle">Responsable  développement</h2>
            <h3>Commercialisation de cartes cadeaux dans le     domaine du vin (b to b).</h3>
          </div>
          <div className="DescKdo">
            <ul>
              <li>Développement commercial : prospection, prise  de   rendez-vous, négociation commerciale.</li>
              <li>Suivi commercial des clients.</li>
              <li>Gestion des RH : Recrutement et gestion de  CDD  en saison (jusqu’a
                    7).</li>
              <li>Gestion des stocks : suivi du niveau de   stocks,   gestion de
                    l’approvisionnement, bonne tenue du dépôt.</li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} id="HoLocation" className="ImgHo">
          <img className="ImgTente" src={ require('../img/red-wine-1004255_1920.jpg') } alt="tente"/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Kdovino
