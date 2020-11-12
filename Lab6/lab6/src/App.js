import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
import reducer from './reducers/simpleReducer';
import { devToolsEnhancer } from "redux-devtools-extension"
import { Provider } from "react-redux";
import ExampleComponent from './ExampleComponent'


const store = createStore(reducer, ['test12'], devToolsEnhancer());

function App() {  
  return (
    <Provider store={store}>
      <div className="App">
        <ExampleComponent/>
      </div>
    </Provider>
    
  );
}

export default App;
