import React from 'react'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

import './LogoSkills.css'

import Bootstrap from './logo/web/Bootstrap.png'
import css3 from './logo/web/css3.png'
import GitHub from './logo/web/GitHub.png'
import HTML_CSS from './logo/web/HTML_CSS.png'
import Javascript from './logo/web/Javascript.png'
import MaterialUi from './logo/web/MaterialUi.png'
import MySQL from './logo/web/MySQL.png'
import NodeJs from './logo/web/NodeJs.png'
import ReactLogo from './logo/web/ReactLogo.png'
import Redux from './logo/web/Redux.png'
import SemantiUi from './logo/web/SemanticUi.png'
import Wordpress from './logo/web/Wordpress.png'

const logos = [
  { src: Bootstrap, alt: 'Bootstrap', title: 'Bootstrap' },
  { src: css3, alt: 'css3', title: 'css3' },
  { src: GitHub, alt: 'GitHub', title: 'GitHub' },
  { src: HTML_CSS, alt: 'HTML_CSS', title: 'HTML_CSS' },
  { src: Javascript, alt: 'Javascript', title: 'Javascript' },
  { src: MaterialUi, alt: 'MaterialUi', title: 'MaterialUi' },
  { src: MySQL, alt: 'MySQL', title: 'MySQL' },
  { src: NodeJs, alt: 'NodeJs', title: 'NodeJs' },
  { src: ReactLogo, alt: 'ReactLogo', title: 'ReactLogo' },
  { src: Redux, alt: 'Redux', title: 'Redux' },
  { src: SemantiUi, alt: 'SemantiUi', title: 'SemantiUi' },
  { src: Wordpress, alt: 'Wordpress', title: 'Wordpress' }
]

const LogoSkills = () => {
  return (

    <div id="logo-container" className="logo-container">
      <ResponsiveMasonry
        columnsCountBreakPoints={{100: 3, 350: 3, 750: 6, 900: 6}}
      >
        <Masonry>
          {logos.map((item, i) =>
            <div className='skills_logo' key={i}>
              <img
                src={item.src}
                title={item.title}
                alt={item.alt}
              />
            </div>
          )}
        </Masonry>
      </ResponsiveMasonry>
    </div>

  )
}

export default LogoSkills
