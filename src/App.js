import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route, // for later
  Redirect, // for later
  Switch, // for later
} from 'react-router-dom'
import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group'

import Index from './components/index'
import HSL from './components/hsl'
import RGB from './components/rgb'

import styles from './styles/styles.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Route render={({ location }) => (
          <div style={styles.fill}>
            <ul style={styles.nav}>
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/hsl/355/87/53">Crimson</NavLink>
              <NavLink to="/hsl/210/5/15">Darkslategray</NavLink>
              <NavLink to="/rgb/28/221/105">Springgreen</NavLink>
              <NavLink to="/rgb/43/29/201">Mediumblue</NavLink>
            </ul>
            <div style={styles.content}>
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames='fade'
                >
                  <Switch location={location}>
                    <Route
                      exact
                      path="/hsl/:h/:s/:l"
                      component={HSL}
                    />
                    <Route
                      exact
                      path="/rgb/:r/:g/:b"
                      component={RGB}
                    />
                    <Route exact path="/home" render={() => (
                      <Redirect to="/" />
                    )} />
                    <Route exact path="/" component={Index} />
                    <Route render={() => <div>Not Found</div>} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          </div>
        )} />
      </Router>
    )
  }
}

const NavLink = (props) => (
  <li style={styles.navItem}>
    <Link {...props} style={{ color: 'inherit' }} />
  </li>
)

// let styles = {}

styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}
styles.nav = {
  padding: 0,
  margin: 0,
  position: 'absolute',
  top: 0,
  height: '40px',
  width: '100%',
  display: 'flex'
}
styles.navItem = {
  textAlign: 'center',
  flex: 1,
  listStyleType: 'none',
  padding: '10px'
}
styles.content = {
  ...styles.fill,
  top: '40px',
  textAlign: 'center'
}

export default App