import React from 'react'
import './Nav.css'

const Nav = (props) => {
  const opacity = (props.opacity) ? Math.max(props.opacity, 0.2) : 0
  const borderBottomWidth = (props.opacity === 1) ? props.borderBottomWidth : 0

  return (
    <div className="navbar navbar-default navbar-static-top" role="navigation" style={{ opacity, borderBottomWidth }}>
      <div className="container">
        <div className="collapse navbar-collapse" id="nav-id">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#AboutMe">A propos</a></li>
            <li><a href="#MySkills">Compétences</a></li>
            <li><a href="#Cv">Cv</a></li>
            <li><a href="#enattente">Ce site</a></li>
            <li><a href="#enattente">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const Header = (props) => (
  <div className="header" style={{ height: props.height, borderBottomWidth: props.borderBottomWidth }}>
    <div className="name">Company</div>
    <div className="description">Bleeding Edge VR Blockchain Solutions</div>
    <div className="links">
      <a href="#AboutMe">A propos</a>
      <a href="#MySkills">Compétences</a>
      <a href="#Cv">Cv</a>
      <a href="#enattente">Ce site</a>
      <a href="#enattente">Contact</a>
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
