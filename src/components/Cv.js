import React from 'react'
import './Cv.css'

const Cv = () => {
  return (
    <div className="toto">

      <div id="Cv" className="Cv">
        <h2 className="CvTitle">Cv</h2>
        <h3>Formation developpeur web Javascript A la Wild Code School</h3>
        <h4>Node JS / React / Redux</h4>
        <p>La Wild Code School vise à former au métier de développeur web. Spécialisation Javascript React / Node JS en 5 mois.</p>
        <p>Le déroulement de la formation se décompose en 3 temps :</p>
        <p>1) Création d’un site internet statique / site vitrine responsive <br/>
              (HTML / CSS, Frameworks FRONT-END / Bootstrap / Material Design)</p>
        <p>2) Création d’une application web dynamique (Client / API) avec persistance de données (mocks et MySQL)<br/>
              Back : Node JS avec une interface CRUD<br/>
              Front : Javascript / HTMLS CSS / Bootstrap<br/>
              Projet : création d’une application web type annuaire des anciens élèves de la Wild Code School.<br/>
              Fonctionnalités : Inscription et enregistrement de compte en base / Connexion et déconnexion / Modification de profil / Suppression de compte</p>
        <p>3) Réalisation d’un projet plus complexe pour un client.<br/>
              Base de données : MySQL<br/>
              Back : Node JS<br/>
              Front : React / Redux.<br/>
              Fonctionnalités : <br/>
              Zone administrable : création/édition/suppression de contenu / upload de documents / CRUD sur les documents uploadés / sélection de l’article ‘a la une’ / sélection des X articles à faire apparaître dans le carrousel de l’accueil / modifier l’identifiant/mdp du compte membre.<br/>
              Gestion utilisateurs / rôles : Connexion accès membres (ouvre à des droits supplémentaires consultation/téléchargement.)</p>
        <p>Au total et en 5 mois j’aurais créé 3 projets concrets avec l’aide d’un logiciel de version (Git)</p>
        <p>Outre l’apprentissage de ces technologies, nous travaillons en groupe de 5 à 6 personnes. <br/>
              J’ai donc appris à travailler avec une approche Agile et une méthodologie SCRUM :
          <ul>
            <li>Désignation d’un Scrum Master</li>
            <li>Réalisation d’un Product Backlog</li>
            <li>Planification de Sprint</li>
            <li>Revue de Sprint</li>
            <li>Rétrospective de Sprint.</li>
          </ul>
        </p>
      </div>
    </div>
  )
}

export default Cv
