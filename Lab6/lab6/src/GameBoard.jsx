import React from 'react';
import {connect} from 'react-redux';
import GameTile from './GameTile'


const mapStateToProps = (state) =>{
    return{
        BoardSize: state.BoardSize,
        BoardState: state.BoardState
    }
}

const mapDispatchToProps = (dispatch) => ({
    Contact: value => dispatch({type: 'AddValue', payload: value})//temp
})


const GameBoard = (props) =>{
    const Board = Array(props.BoardSize).fill(0).map((val1, ind1) => 
        //There was a white space in between the divs (rows) no matter what I did, this was the only solution I found
        <div style={{marginBottom:"-4px"}}>
            {Array(props.BoardSize).fill(0).map((val2, ind2) => <GameTile highlighted={props.BoardState[ind1][ind2]}/>)}
        </div>
    )


    return(
        <div>
            {Board}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);