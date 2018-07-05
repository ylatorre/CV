import React from 'react'

import './WildCodeSchool.css'

const WildCodeSchool = () => {
  return (
    <div className="container-wild-code-shcoll">
      <div className="container-title-wcs">
        <div>
          <p>Février 2018 - Juillet 2018</p>
          <h2 className="wcs-title">Formation développeur web Javascript </h2>
          <h3>Node JS / React / Redux</h3>
        </div>
        <div>
          <p>La Wild Code School vise à former au métier de développeur Web spécialisation Javascript React / Node JS  en 5 mois.</p>
        </div>
      </div>
      <div>
        <div className="container-formation">
          <p>Le déroulement de la formation se décompose en 3 temps :</p>
        </div>
        <div className="container-projet">
          <div className="project">
            <div className="project_1">
              <h4>Création d’un site internet statique / responsive</h4>
              <p className="description-project">Projet: Site internet Portofolio pour un photographe.</p>
              <p className="para-project">
              (HTML / CSS, Frameworks FRONT-END / Bootstrap  Material Design)</p>
            </div>
          </div>
          <div className="project">
            <div className="project_2">
              <h4>Création d’une application web dynamique (Client / API)</h4>
              <p className="description-project">Projet: Application web type annuaire des anciens élèves de la Wild Code School.</p>
              <p className="para-project">
              Persistance de données (mocks et MySQL) Back   Node JS avec une interface CRUD<br/>
                  Front: Javascript / HTMLS CSS / Bootstrap<br/>
                  Fonctionnalités: Inscription et enregistrement de  compte en base  Connexion et déconnexion / Modification de profil / Suppression de compte</p>
            </div>
          </div>
          <div className="project">
            <div className="project_3">
              <h4>Réalisation d’un projet plus complexe pour un client.</h4>
              <p className="description-project">Projet: Application pour l'association  "Pour une autre PAC".</p>
              <p className="para-project">
              Back: Node JS<br/>
              Front: React / Redux.<br/>
              Base de données : MySQL<br/>
              Fonctionnalités: <br/>
              Zone administrable: création/édition/suppression de contenu / upload de documents / CRUD / article a la une / x articles dans un carrousel de l’accueil.<br/>
                Gestion d'utilisateurs / rôles/ connexion / déconnexion</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-recap-wcs">
        <p>Au total et en 5 mois j’aurais créé 3 projets concrets avec l’aide d’un logiciel de version (Git)</p>
        <p>Outre l’apprentissage de ces technologies, nous travaillons en groupe de 5 à 6 personnes.</p>
        <p>J’ai donc appris à travailler avec une approche Agile et une méthodologie SCRUM :</p>
        <ul>
          <li>Désignation d’un Scrum Master</li>
          <li>Réalisation d’un Product Backlog</li>
          <li>Planification de Sprint</li>
          <li>Revue de Sprint</li>
          <li>Rétrospective de Sprint.</li>
        </ul>
      </div>
    </div>
  )
}

export default WildCodeSchool
