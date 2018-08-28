import React from 'react'
import Window from './../../../../components/Window'

import './styles.pcss'

const Office = () => (
  <Window title='Office' id='contact'>
    <div className='office'>
      <p><strong>Front-End Family</strong>>Silicon Valley 231-5531 Computers Street Santa Monica, California, USA</p>
      <i className='fas fa-phone' /> First Phone: +48 660421226
      <i className='fas fa-mobile' /> Second Phone: +972 49959509
      <i className='fas fa-envelope' /> E-mail Address: office@front-end.family
    </div>
    <a href='//facebook.com' className='social-media'>Check us on: <img className='fb' src='img/facebook.png' /></a>
  </Window>
)

export default Office
