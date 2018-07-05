import React from 'react'
import FooterContact from './FooterContact'
import FormFooter from './FormFooter'
import './Footer.css'

class Footer extends React.Component {
  state = {email: []};

  addEmail = (email) => {
    let odlEmail = this.state.email;
    email.id = Date.now()
    let newEmail = [...odlEmail, email]
    this.setState({email: newEmail})
  }

  render () {
    return (
      <div className="container-footer" id="Contact">

        <div className="footer-title">
          <h2>Me Contacter</h2>
        </div>

        <div className="container-form-footer">
          <div className="container-form">
            <FormFooter addEmail={this.addEmail}/>
          </div>
          <div className="container-contact">
            <FooterContact />
          </div>
        </div>

      </div>
    )
  }
}

export default Footer
