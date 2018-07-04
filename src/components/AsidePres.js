import React from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import './AsidePres.css'

const AsidePres = () => {
  return (
    <div className="MainAside">

      <div className="ContainerProfilPicture">
        <div className="ProfilPicture">
        </div>
      </div>

      <div className="MainAsideDesciption">
        <div className="Name">
          <h1>Edouard de Laage</h1>
        </div>
        <div className="Spec">
          <h2>Developpeur Web</h2>
          <p>Javascript / Node JS / React</p>
        </div>
        <div className="SocialNetworks">
          <a className="fa fa-linkedin LinksAside" href="https://www.linkedin.com/in/edouard-de-laage-4711818/"></a>
          <a className="fa fa-github LinksAside" href="https://github.com/eddelaage"></a>
        </div>
        <div className="Contact">
          <p className="LinksAside">06 07 73 62 26</p>
          <p><a className="LinksAside" href="mailto:edouarddelaage@gmail.com"> edouarddelaage@gmail.com</a></p>
        </div>
      </div>

    </div>
  )
}

export default AsidePres
