import React from 'react'
import PropTypes from 'prop-types'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#FF9800' }
  }
})

const FormFooter = props => {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <TextField
          label="Prénom"
          id="margin-none"
          defaultValue="Prénom"
          className="Firstname"
        />
      </MuiThemeProvider>
    </div>
  )
}

FormFooter.propTypes = {
  classes: PropTypes.object.isRequired
}

export default FormFooter
