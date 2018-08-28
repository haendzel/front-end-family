import './styles.pcss'
import React from 'react'
import {
  Link
} from 'react-router-dom'
import {
  Helmet
} from 'react-helmet'
import Window from '../../components/Window'

const NotFound = () => (
  <React.Fragment>
    <Helmet>
      <title>Front-End.Family - Error 404 - page not found</title>
    </Helmet>
    <Window className='not-found-page' title='Error 404 - not found'>
      <h1>Ooops... this page not found.</h1>
      <Link to='/'>Back to home</Link>
    </Window>
  </React.Fragment>
)

export default NotFound
