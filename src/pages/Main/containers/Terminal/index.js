import './styles.pcss'
import React from 'react'
import Typed from 'react-typed'
import Window from '../../../../components/Window'

const Terminal = () => (
  <Window className='terminal' id='terminal' title='front-end.family —— bash —— 150x200'>
    <Typed
      strings={['Welcome everyone! <br><br> Front-End Family inventing and developing your future. <br><br> Do you mind interesting project? We will do this. <br><br> Put yourself in our hands.']}
      typeSpeed={100}
      backSpeed={50}
    />
  </Window>
)

export default Terminal
