import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import GameTile from './GameTile'


const mapStateToProps = (state) =>{
    return{
        data: state
    };
}

const mapDispatchToProps = (dispatch) => ({
    IncrementIndex: () => dispatch({type: 'IncrementIndex'}),
    ChangeSnakeValue: (val, ind) => dispatch({type: 'ChangeSnakeValue', Index: ind, Value: val}),
    ChangeTileState: (coord, newState) => dispatch({type: 'ChangeTileState', Coord: coord, NewState: newState})
})


const GameBoard = (props) =>{
    
    const Board = 
        (Array(props.data.BoardSize).fill(0).map((val1, ind1) => 
        //There was a white space in between the divs (rows) no matter what I did, this was the only solution I found
        <div style={{marginBottom:"-4px"}}>
            {Array(props.data.BoardSize).fill(0).map((val2, ind2) => <GameTile highlighted={props.data.BoardState[ind1][ind2]}/>)}
        </div>)
    );

    function MoveSnakeInDirection(dir){
        let SnakeHead = props.data.SnakeState[props.data.Index];
        let NewCoords = [SnakeHead[0]+dir[0], SnakeHead[1]+dir[1]];

        if(NewCoords.some((val) => val < 0 || val >= props.data.BoardSize)){
            console.log("Movement invalid, outside of board", NewCoords);
            return;
        }
        else if(props.data.SnakeState.some((val, ind) => val[0] == NewCoords[0] && val[1] == NewCoords[1] && (props.data.Index+1)%props.data.SnakeLength != ind)){
            console.log("Movement invalid, intersects snake", NewCoords);
            return;
        }
        else{
            let newInd = (props.data.Index + 1) % props.data.SnakeLength;
            props.ChangeTileState(props.data.SnakeState[newInd], false);
            props.ChangeTileState(NewCoords, true);
            props.ChangeSnakeValue(NewCoords, newInd);
            props.IncrementIndex();
            console.log("Moved snake, new head at:", NewCoords);
        }
    }

    function HandleKeyPress(e){
        
        switch(e.keyCode){
            case 38:
                console.log("Up Pressed");
                MoveSnakeInDirection([0, -1]);
                break;
            case 40:
                console.log("Down Pressed");
                MoveSnakeInDirection([0, 1]);
                break;
            case 37:
                console.log("Left Pressed");
                MoveSnakeInDirection([-1, 0]);
                break;
            case 39:
                console.log("Right Pressed");
                MoveSnakeInDirection([1, 0]);
                break;
            default:
                console.log("A uneventful key was pressed")

        }
    }

    useEffect(() => {
        window.addEventListener('keydown', HandleKeyPress);
        return () => {
            window.removeEventListener('keydown', HandleKeyPress);
        };
    }, [props]);

    return(
        <div>
            {Board}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);