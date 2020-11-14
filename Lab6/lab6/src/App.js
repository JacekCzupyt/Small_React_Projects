import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
import reducer from './reducers/BoardReducer';
import { devToolsEnhancer } from "redux-devtools-extension"
import { Provider } from "react-redux";
//import ExampleComponent from './ExampleComponent'
import GameBoard from './GameBoard'


const BoardSize = 10;
const SnakeLength = 6;
const SnakeState = Array(SnakeLength).fill(0).map((v, i) => [i, 0]);
const BoardState = Array(BoardSize).fill(0).map(
  (v, y) => Array(BoardSize).fill(false).map(
    (v2, x) => SnakeState.some((a) => a[0]===x && a[1]===y) ? true : false
  )
);

const InitialStoreState = {
  BoardSize: BoardSize,
  SnakeLength: SnakeLength,
  SnakeState: SnakeState,
  BoardState: BoardState,
  Index: SnakeLength-1
};

const store = createStore(reducer, InitialStoreState, devToolsEnhancer());



function App() {  
  return (
    <Provider store={store}>
      <div className="App">
        <GameBoard/>
      </div>
    </Provider>
    
  );
}

export default App;
