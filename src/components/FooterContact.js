import React from 'react'
import './FooterContact.css'

const FooterContact = () => {
  return (
    <div className="FooterContact">
      <div className="FooterLocation">
        <p>
        Edouard de Laage <br/>
        75017 Paris<br/>
        France
        </p>
      </div>
      <div className="FooterTel">
        <p>
        +33 06 07 73 62 26 <br/>
          <a href="mailto:edouarddelaage@gmail.com">edouarddelaage@gmail.com</a>
        </p>
      </div>
    </div>
  )
}

export default FooterContact
