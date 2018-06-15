import React from 'react'
import Grid from '@material-ui/core/Grid'
import FooterContact from './FooterContact'
import FormFooter from './FormFooter'
import './Footer.css'

const Footer = () => {
  return (
    <div className="Footer">
      <Grid container spacing={0}>
        <Grid item xs={12} className="FooterTitle">
          <div>
            <h2>Me Contacter</h2>
          </div>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6} lg={6} xl={6} className="BlockFormContact">
            <FormFooter />
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <FooterContact />
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
