import './styles.pcss'
import React from 'react'
import Window from '../../../../../../components/Window'

const TeamMember = ({
  data
}) => (
  <Window className='team-member' title={`${data.name} - ${data.position}`}>
    <img src={data.image} />
    <p>{data.description}</p>
    <a href={`mailto:${data.email}`}><i className='far fa-envelope' /><span>{data.email}</span></a>
    <a href={`tel:${data.phone}`}><i className='fas fa-mobile-alt' /><span>{data.phone}</span></a>
  </Window>
)

export default TeamMember
