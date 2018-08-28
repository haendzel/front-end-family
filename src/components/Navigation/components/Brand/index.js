import './styles.pcss'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const logo = require('./logo-small.svg')

const Brand = () => (
  <AnchorLink className='brand navlink' href='#terminal'>
    <img src={logo} />
  </AnchorLink>
)

export default Brand
