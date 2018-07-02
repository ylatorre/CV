import React from 'react'
import Button from './Button'

import './FormFooter.css'

class FormFooter extends React.Component {
  state= {
    firts_name: '',
    last_name: '',
    email: '',
    messages: '',
    flash: ''
  };

  handelSubmit = (event) => {
    event.preventDefault();
    this.props.addEmail(this.state)
    console.log(this.state)
    this.setState({firts_name: '', last_name: '', email: '', messages: ''})

    fetch('http://localhost:5000/auth/messages', {
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

    fetch('http://localhost:5000/auth/send-email', {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'
      }),
      body: JSON.stringify(this.state)
    })
  };

  render () {
    return (
      <div className="FormFooter">
        <form onSubmit={this.handelSubmit}>
          <div className="ContainerFormFooter">
            <div className="ContainerInput">
              <label htmlFor="FirstName">Prénom</label>
              <input
                type="text"
                name="FirstName"
                id="FirstName"
                className="firts_name"
                value={this.state.firts_name}
                onChange={ (event) => this.setState({ firts_name: event.target.value }) }/>
              <label htmlFor="LasName">Nom</label>
              <input
                type="text"
                name="LastName"
                id="LasName"
                className="LastName"
                value={this.state.last_name}
                onChange={ (event) => this.setState({ last_name: event.target.value }) }/>
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                name="Email"
                id="Email"
                className="Email"
                value={this.state.email}
                onChange={ (event) => this.setState({ email: event.target.value }) }/>
            </div>
            <div className="ContainerTexarea">
              <label htmlFor="Email">Votre demande</label>
              <textarea
                name="Description"
                id="Description"
                className="Description" rows="11"
                value={this.state.messages}
                onChange={ (event) => this.setState({ messages: event.target.value }) }/>
              <Button />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default FormFooter
