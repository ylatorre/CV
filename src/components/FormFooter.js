import React from 'react'
import Button from './Button'
import FormValidator from './FormValidator'

import './FormFooter.css'

class FormFooter extends React.Component {
  constructor () {
    super()

    this.validator = new FormValidator([
      {
        field: 'firts_name',
        method: 'isEmpty',
        validWhen: false,
        message: 'Merci de reseigner votre prénom'
      },
      {
        field: 'last_name',
        method: 'isEmpty',
        validWhen: false,
        message: 'Merci de reseigner votre nom'
      },
      {
        field: 'email',
        method: 'isEmail',
        validWhen: true,
        message: 'Ce mail n\'est pas valide'
      },
      {
        field: 'tel',
        method: 'isEmpty',
        validWhen: false,
        message: 'Merci de reseigner votre téléphone'
      },
      {
        field: 'tel',
        method: 'matches',
        args: [/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/], // args is an optional array of arguements that will be passed to the validation method
        validWhen: true,
        message: 'Ce numéro de télpéhone n\'est pas valide'
      }
    ])

    this.state = {
      firts_name: '',
      last_name: '',
      email: '',
      messages: '',
      flash: '',
      tel: '',
      validation: this.validator.valid()
    }
    this.submitted = false
  }

  handleInputChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handelSubmit = (event) => {
    event.preventDefault()
    this.props.addEmail(this.state)
    console.log(this.state)
    const validation = this.validator.validate(this.state)
    this.setState({ validation })
    this.submitted = true

    if (validation.isValid) {
      fetch('https://edouarddelaage-server.herokuapp.com/auth/messages', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'
        }),
        body: JSON.stringify(this.state)
      })
        .then(res => res.json())
        .then(
          res => this.setState({'flash': res.flash}),
          err => this.setState({'flash': err.flash})
        )

      fetch('https://edouarddelaage-server.herokuapp.com/auth/send-email', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'
        }),
        body: JSON.stringify(this.state)
      })
    }
  }

  render () {
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation

    return (
      <div>
        <form onSubmit={this.handelSubmit}>
          <div className="container-form">
            <div className="container-input">

              <div>
                <label htmlFor="FirstName">Prénom</label>
                <input
                  type="text"
                  name="FirstName"
                  id="FirstName"
                  className="FirstName"
                  value={this.state.firts_name}
                  onChange={ (event) => this.setState({ firts_name: event.target.value }) }
                />
                <span className="help-block">{validation.firts_name.message}</span>
              </div>

              <div>
                <label htmlFor="LasName">Nom</label>
                <input
                  type="text"
                  name="LastName"
                  id="LasName"
                  className="LastName"
                  value={this.state.last_name}
                  onChange={ (event) => this.setState({ last_name: event.target.value }) }
                />
                <span className="help-block">{validation.last_name.message}</span>
              </div>

              <div>
                <label htmlFor="Tel">Tel</label>
                <input
                  type="tel"
                  name="Tel"
                  id="Tel"
                  className="Tel"
                  value={this.state.tel}
                  onChange={ (event) => this.setState({ tel: event.target.value }) }
                />
                <span className="help-block">{validation.tel.message}</span>
              </div>

              <div>
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  name="Email"
                  id="Email"
                  className="Email"
                  value={this.state.email}
                  onChange={ (event) => this.setState({ email: event.target.value }) }
                />
                <span className="help-block">{validation.email.message}</span>
              </div>

            </div>

            <div className="ContainerTexarea">
              <label htmlFor="Email">Votre demande</label>
              <textarea
                name="Description"
                id="Description"
                className="message" rows="11"
                value={this.state.messages}
                onChange={ (event) => this.setState({ messages: event.target.value }) }/>

              <Button />
            </div>
          </div>
        </form>
        <p className="status-message">
          {this.state.flash ? JSON.stringify(this.state.flash) : ''}
        </p>
      </div>
    )
  }
}

export default FormFooter
