
function LengthReducer(state, action){
    switch(action.type){
        case "IncrementIndex":
            let ind = state.Index + 1;
            if(ind > state.Length){ind = 0;}
            return {Length: state.Length, Index: ind};
        default:
            return state;
    }
}

function SnakeReducer(state, action){
    switch(action.type){
        case "ChangeSnakeValue":
            return state.map((val, ind) => ind === action.Index ? action.Value : state[ind]);
        default:
            return state;
    }
}

function BoardReducer(state, action){
    switch(action.type){
        case "ChangeTileState":
            //change value of state[action.Coord[1]][action.Coord[0]] to action.NewState
            return state.map((v1, y) => y === action.Coord[1] ? v1.map((v2, x) => x === action.Coord[0] ? action.NewState : v2) : v1);
        default:
            return state;
    }
}

function FullReducer(state = {}, action){
    return {
        BoardSize: state.BoardSize,
        SnakeLength: LengthReducer(state.SnakeLength, action),
        SnakeState: SnakeReducer(state.SnakeState, action),
        BoardState: BoardReducer(state.BoardState, action)
    };
}

export default FullReducer;