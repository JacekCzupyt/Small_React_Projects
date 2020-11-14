
function IndexReducer(state, action){
    switch(action.type){
        case "IncrementIndex":
            return (state.ind + 1)%state.len;
        default:
            return state.ind;
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
        SnakeLength: state.SnakeLength,
        Index: IndexReducer({len: state.SnakeLength, ind: state.Index}, action),
        SnakeState: SnakeReducer(state.SnakeState, action),
        BoardState: BoardReducer(state.BoardState, action)
    };
}

export default FullReducer;