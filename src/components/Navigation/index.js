import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Brand from './components/Brand'
import Language from './components/Language'

import './styles.pcss'

const Navigation = () => (
  <nav className='navigation' id='mainNav'>
    <Brand />
    <AnchorLink className='navlink' offset={() => 35} href='#about-us'>Services</AnchorLink>
    <AnchorLink className='navlink' offset={() => 35} href='#our-team'>Team</AnchorLink>
    <AnchorLink className='navlink' offset={() => 35} href='#projects'>Projects</AnchorLink>
    <AnchorLink className='navlink' offset={() => 35} href='#contact'>Office</AnchorLink>
    <Language />
  </nav>
)

export default Navigation
