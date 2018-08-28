import './styles.pcss'
import React from 'react'
import Window from '../../../../components/Window'
import TeamMember from './components/TeamMember'

const image = require('./portrait.jpg')

const members = [{
  name: 'Pavlo Ivanichenko',
  position: 'CEO & Founder',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  email: 'ceo@frontend.family',
  phone: '+48 660 444 222',
  image
}, {
  name: 'Filip Handzel',
  position: 'DEO',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  email: 'deo@frontend.family',
  phone: '+48 660 444 222',
  image
}, {
  name: 'Fernando Alonso',
  position: 'F1 racing driver',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  email: 'fernando.alonso@frontend.family',
  phone: '+48 660 444 222',
  image
}]

const Team = () => (
  <Window title='Our team' id='our-team'>
    {members.map((member, index) => (
      <TeamMember key={index} data={member} />
    ))}
  </Window>
)

export default Team
