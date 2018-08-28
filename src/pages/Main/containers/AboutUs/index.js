import './styles.pcss'
import React from 'react'
import Window from '../../../../components/Window'

const AboutUs = () => (
  <Window title='Services' id='about-us'>
    <div className='about-us-content'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
      <br />
      <p>We use technologies:</p>
      <div className='web-technologies'>
        <i className='fab fa-html5' alt='HTML5' />
        <i className='fab fa-css3-alt' alt='CSS3' />
        <i className='fab fa-sass' alt='Sass' />
        <i className='fab fa-js' alt='JavaScript' />
        <i className='fab fa-node-js' alt='NodeJs' />
        <i className='fab fa-react' alt='ReactJS' />
        <i className='fab fa-php' alt='PHP' />
        <i className='fab fa-git' alt='GIT' />
      </div>
    </div>
  </Window>
)

export default AboutUs
