import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './Nav.css'

const Nav = (props) => {
  const opacity = (props.opacity) ? Math.max(props.opacity, 0.2) : 0
  const borderBottomWidth = (props.opacity === 1) ? props.borderBottomWidth : 0

  return (
    <div className="navbar navbar-default navbar-static-top" role="navigation" style={{ opacity, borderBottomWidth }}>
      <div className="container">
        <div className="collapse navbar-collapse" id="nav-id">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/#Header">Acceuil</Link></li>
            <li><Link to="/#AboutMe">A Propos</Link></li>
            <li><Link to="/#MySkills">Compétences</Link></li>
            <li><Link to="/cv">Cv</Link></li>
            <li><Link to="/#CeSite">Ce site</Link></li>
            <li><Link to="/#Contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const Header = (props) => (
  <div className="header" style={{ height: props.height, borderBottomWidth: props.borderBottomWidth }}>
    <div className="name">Une passion...</div>
    <div className="description">Coder vos idées</div>
    <div className="links">
      <Link to="/">Acceuil</Link>
      <Link to="/#AboutMe">A Propos</Link>
      <Link to="/#MySkills">Compétences</Link>
      <Link to="/cv">Cv</Link>
      <Link to="/#CeSite">Ce site</Link>
      <Link to="/#Contact">Contact</Link>
    </div>
  </div>
)

class Nav2 extends React.Component {
  static defaultProps = {
    bottomBorderWidth: 2,
    headerHeight: 200,
    fadeInDistance: 40
  };

  constructor (props) {
    super(props)
    this.state = {
      navOpacity: 0
    }
    this.updateNavOpacity = this.updateNavOpacity.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.updateNavOpacity)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.updateNavOpacity)
  }

  updateNavOpacity () {
    const navbarHeight = 50 // Bootstrap default
    const { bottomBorderWidth, headerHeight, fadeInDistance } = this.props
    const endFade = headerHeight - navbarHeight - bottomBorderWidth
    const startFade = endFade - fadeInDistance
    const scrolly = window.scrollY

    if (scrolly < startFade) {
      if (this.state.opacity === 0) return
      this.setState({ navOpacity: 0 })
      return
    }

    if (scrolly > endFade) {
      if (this.state.opacity === 1) return
      this.setState({ navOpacity: 1 })
      return
    }

    const pxPastStartFade = scrolly - startFade
    const navOpacity = pxPastStartFade / (endFade - startFade)
    this.setState({ navOpacity })
  }

  render () {
    return (
      <div>
        <Nav opacity={ this.state.navOpacity } borderBottomWidth={ this.props.bottomBorderWidth } />
        <Header height={ this.props.headerHeight } borderBottomWidth={ this.props.bottomBorderWidth } />
      </div>
    )
  }
}

export default Nav2
