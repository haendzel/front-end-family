import './styles.pcss'
import React from 'react'
import Window from './../../../../components/Window'

const image = require('./4.png')

const Projects = () => (
  <section id='projects'>
    <Window className='projects' title='Our projects'>
      <div className='card-window animated fadeIn'>
        <div className='row'>
          <div className='project'>
            <img src={image} alt='project 1' className='image' />
            <div className='overlay-project'>
              <div className='info-project'>
                Lorem ipsum dolor mit alles nur fur mitteleuropa.
                <a href='page.html' className='bttn'>Read more</a>
              </div>
            </div>
          </div>
          <div className='project'>
            <img src={image} alt='project 1' className='image' />
            <div className='overlay-project'>
              <div className='info-project'>
                Lorem ipsum dolor mit alles nur fur mitteleuropa.
                <a href='page.html' className='bttn'>Read more</a>
              </div>
            </div>
          </div>
          <div className='project'>
            <img src={image} alt='project 1' className='image' />
            <div className='overlay-project'>
              <div className='info-project'>
                Lorem ipsum dolor mit alles nur fur mitteleuropa.
                <a href='page.html' className='bttn'>Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='timeline-bar'>
        <button className='fe-btn'>2016</button>
        <button className='fe-btn'>2017</button>
        <button className='fe-btn'>2018</button>
      </div>
    </Window>
  </section>
)

export default Projects
