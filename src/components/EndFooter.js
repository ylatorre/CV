import React from 'react'
import Grid from '@material-ui/core/Grid'

import './EndFooter.css'

const EndFooter = () => {
  return (
    <div className="BlockFooter">
      <Grid container spacing={0}>
        <Grid item xs={12} className="ContentEndFooter">
          <div>
            <p>© 2018 Made by Edouard de Laage / Développeur web</p>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default EndFooter
