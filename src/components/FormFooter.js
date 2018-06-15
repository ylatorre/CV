import React from 'react'
import Button from './Button'

import './FormFooter.css'

const FormFooter = props => {
  return (
    <div className="FormFooter">
      <form>
        <label htmlFor="FirstName">Prénom</label>
        <input type="text" name="FirstName" id="FirstName" className="LastName"/>
        <label htmlFor="LasName">Nom</label>
        <input type="text" name="LastName" id="LasName" className="LastName"/>
        <label htmlFor="Email">Email</label>
        <input type="email" name="Email" id="Email" className="Email"/>
        <Button />
      </form>
    </div>
  )
}

export default FormFooter
