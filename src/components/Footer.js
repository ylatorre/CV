import React from 'react'
import FooterContact from './FooterContact'
import FormFooter from './FormFooter'
import './Footer.css'

const Footer = () => {
  return (
    <div className="Footer" id="Contact">

      <div className="FooterTitle">
        <h2>Me Contacter</h2>
      </div>

      <div className="ContainerFooter">
        <div className="ContainerFormContact">
          <FormFooter />
        </div>
        <div className="ContainerContact">
          <FooterContact />
        </div>
      </div>

    </div>
  )
}

export default Footer
