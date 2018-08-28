import React from 'react'
import {
  Helmet
} from 'react-helmet'
import Terminal from './containers/Terminal'
import AboutUs from './containers/AboutUs'
import Team from './containers/Team'
import Projects from './containers/Projects'
import Office from './containers/Office'

const Main = () => (
  <React.Fragment>
    <Helmet>
      <title>Front-End.Family</title>
    </Helmet>
    <Terminal />
    <AboutUs />
    <Team />
    {false && <Projects />}
    {false && <Office />}
  </React.Fragment>
)

export default Main
