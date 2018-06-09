import React from 'react'
import './AsidePres.css'
import profilpicture from '../img/profilpicture.jpg'

const AsidePres = () => {
  return (
    <div className="MainAside">
      <div className="ProfilPicture">
        <img className="ImgProfilPicture" src={profilpicture} alt="profilpicture"/>
      </div>
      <div className="Name">
        <h1>Edouard de Laage</h1>
        <h2>Developpeur Web</h2>
      </div>
      <div className="Spec">
        <p>Javascript / Node JS / React</p>
      </div>
      <hr/>
      <div className="SocialNetworks">
        <p><a href="https://www.linkedin.com/in/edouard-de-laage-4711818/">Linkedin</a></p>
        <p><a href="https://github.com/eddelaage">Github</a></p>
      </div>
      <hr/>
      <div className="Contact">
        <p>06 82 50 35 68 </p>
        <p><a href="mailto:edouarddelaage@gmail.com"> edouarddelaage@gmail.com</a></p>
      </div>
    </div>
  )
}

export default AsidePres
