import logo from './logo.svg';
import './App.css';
import Component from './Component'
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from 'react-router-dom'



function App() {


  
  return (
    <div className="App">
      <Router>
        <div>
          <Component/>
        </div>
        
      </Router>
    </div>
    
  );
}

export default App;
