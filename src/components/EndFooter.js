import React from 'react'
import Grid from '@material-ui/core/Grid'

import './EndFooter.css'

const EndFooter = () => {
  return (
    <div className="container-footer-low">
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <div className="social-network">
            <a className="fa fa-linkedin" href="https://www.linkedin.com/in/edouard-de-laage-4711818/"></a>
            <a className="fa fa-github" href="https://github.com/eddelaage"></a>
          </div>
          <div>
            <p>© 2018 Made by Edouard de Laage / Développeur web</p>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default EndFooter
