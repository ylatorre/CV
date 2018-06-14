import React from 'react'
import FooterContact from './FooterContact'
import FormFooter from './FormFooter'
import './Footer.css'

const Footer = () => {
  return (
    <div className="Footer">
      <h2>Pour me contacter</h2>
      <FormFooter />
      <FooterContact />
    </div>
  )
}

export default Footer
