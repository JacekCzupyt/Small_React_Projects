import logo from './logo.svg';
import './App.css';
import Component from './Component'
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from 'react-router-dom'
import AddForm from './AddForm'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Component/>
          </Route>
          <Route path="/add">
            <AddForm/>
          </Route>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
