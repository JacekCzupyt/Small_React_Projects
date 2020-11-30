import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom"

import StartPage from './StartPage'
import AboutPage from './About'
import CarsPage from './Cars'

function App() {
  let history = useHistory();

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <StartPage></StartPage>
        </Route>
        <Route path="/about">
          <AboutPage></AboutPage>
        </Route>
        <Route path="/cars">
          <CarsPage></CarsPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
