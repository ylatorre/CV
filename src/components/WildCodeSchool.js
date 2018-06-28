import React from 'react'
import Grid from '@material-ui/core/Grid';

import './WildCodeSchool.css'

const WildCodeSchool = () => {
  return (
    <div className="BlockWildCodeSchool">
      <div className="WildCodeSchool Wcs">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="HeadWCS">
              <p>Février 2018 - Juillet 2018</p>
              <h2 className="WCSTitle">Formation developpeur web Javascript </h2>
              <h3>Node JS / React / Redux</h3>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div>
              <p>La Wild Code School vise à former au métier de   développeur web. Spécialisation Javascript React / Node JS  en 5 mois.</p>
            </div>
          </Grid>
        </Grid>
      </div>

      <div>
        <Grid container spacing={24}>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="DeroulFormation">
              <p>Le déroulement de la formation se décompose en 3 temps :</p>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="ThreeProjects">

            <div className="Project">
              <div className="Project_1">
                <h4>Création d’un site internet statique / responsive</h4>
                <p className="ParaProject">(HTML / CSS, Frameworks FRONT-END / Bootstrap / Material     Design)</p>
              </div>
            </div>

            <div className="Project">
              <div className="Project_2">
                <h4>Création d’une application web dynamique (Client / API)</h4>
                <p className="ParaProject">Persistance de données (mocks et MySQL) Back : Node JS   avec  une interface CRUD<br/>
                    Front : Javascript / HTMLS CSS / Bootstrap<br/>
                    Projet : création d’une application web type annuaire   des anciens élèves de la  Wild Code School.<br/>
                    Fonctionnalités : Inscription et enregistrement de  compte en base / Connexion et   déconnexion /  Modification de profil / Suppression de compte</p>
              </div>
            </div>

            <div className="Project">
              <div className="Project_3">
                <h4>Réalisation d’un projet plus complexe pour un client.</h4>
                <p className="ParaProject">Base de données : MySQL<br/>
                    Back : Node JS<br/>
                    Front : React / Redux.<br/>
                    Fonctionnalités : <br/>
                    Zone administrable : création/édition/suppression de  contenu / upload de documents   / CRUD sur les documents   uploadés / sélection de l’article ‘a la une’ /   sélection  desX      articles à faire apparaître dans  le carrousel de l’accueil /   modifier l’identifiant/mdp   du compte membre.<br/>
                        Gestion utilisateurs / rôles : Connexion accès  membres (ouvre à des droits   supplémentaires  consultation/téléchargement.)</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="EndWcs">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <p>Au total et en 5 mois j’aurais créé 3 projets concrets avec  l’aide d’un logiciel de version (Git)</p>
            <p>Outre l’apprentissage de ces technologies, nous travaillons  en groupe de 5 à 6 personnes.</p>
            <p>J’ai donc appris à travailler avec une approche Agile et   une méthodologie SCRUM :</p>
            <ul>
              <li>Désignation d’un Scrum Master</li>
              <li>Réalisation d’un Product Backlog</li>
              <li>Planification de Sprint</li>
              <li>Revue de Sprint</li>
              <li>Rétrospective de Sprint.</li>
            </ul>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default WildCodeSchool
