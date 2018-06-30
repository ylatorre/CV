import React from 'react'

import './HoLocation.css'

const HoLocation = () => {
  return (
    <div className="ContainerHo">
      <div className="ContainerImg">
      </div>
      <div className="ContainerDesc">
        <div className="ContentHo">
          <div className="Ho">
            <p>Juin 2010 - Décembre 2017</p>
            <h2 className="HoTitle">Gérant de la société H.O. Location</h2>
            <h3>Entreprise de location de tentes et matériel évènementiel composé de 4   salariés CDI.</h3>
          </div>
          <div>
            <ul>
              <li>Développement du CA de 190 000 € à 490 000 €. </li>
              <li>Gestion financière : Gestion de la trésorerie / des factures clients et  fournisseurs / comptabilité et clôtures de bilan.</li>
              <li>Gestion des RH : Recrutement et gestion de CDD en saison (jusqu’a 7).</li>
              <li>Gestion de la logistique : Organisation des plannings de montage et
                    démontage. Optimisation des transports. Coordination des équipes de   monteurs.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HoLocation
