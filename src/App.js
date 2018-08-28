import './../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/styles/styles.pcss'
import React from 'react'
import {
  createBrowserHistory
} from 'history'
import {
  Router,
  Route,
  Switch
} from 'react-router'
import Navigation from './components/Navigation'
import Main from './pages/Main'
import NotFound from './pages/NotFound'

const App = () => (
  <React.Fragment>
    <Navigation />
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  </React.Fragment>
)

export default App
