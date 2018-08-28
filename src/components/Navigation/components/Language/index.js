import './../../../../../node_modules/flag-icon-css/css/flag-icon.css'
import './styles.pcss'
import React from 'react'

const Language = () => (
  <span className='language navlink'>
    <span className='flag-icon flag-icon-gb' />
    <div className='dropdown'>
      <a className='navlink'><span className='flag-icon flag-icon-ua' />&nbsp;Ukrainian</a>
      <a className='navlink'><span className='flag-icon flag-icon-ru' />&nbsp;Russian</a>
    </div>
  </span>
)

export default Language
