import React from 'react'
import './Cv.css'

const Cv = () => {
  return (
    <div className="toto">
      <div id="AboutMe" className="AboutMe">
        <h2 className="CvTitle">A propos</h2>
        <p>38 ans / Permis B / Vivant a Paris</p>
        <p>Passionné, curieux, soif d’apprendre, entrepreneur. Voilà ce qui m’a amené dans le monde du développement web. Après avoir entrepris dans le monde de l’événementiel, j’ai découvert à travers différents projets la puissance de la programmation et tout ce que l’on peut faire avec ces compétences. J’ai donc appris en autodidactes les rudiments (HTML/CSS, PHP) puis j’ai choisi d’entamer une reconversion en me spécialisant sur les technologies Javascript (Node JS / React / Redux). Après une formation intensive de 5 mois, je recherche un stage de 4 mois dans l’objectif d’approfondir mes compétences dans un environnement de production professionnel. Je serais très heureux d’en discuter. Vous pouvez me contacter au 06 07 73 62 26 / edouarddelaage@gmail.com</p>
      </div>
      <div id="MySkills" className="MySkills">
        <h2 className="SkillsTitle">Mes compétences</h2>
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
