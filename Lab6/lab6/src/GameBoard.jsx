import React from 'react';
import {connect} from 'react-redux';
import GameTile from './GameTile'


const mapStateToProps = (state) =>{
    return{
        BoardSize: state.BoardSize//temp
    }
}

const mapDispatchToProps = (dispatch) => ({
    Contact: value => dispatch({type: 'AddValue', payload: value})//temp
})


const GameBoard = (props) =>{
    return(
        <div>
            <GameTile highlighted={true}/>
            <GameTile highlighted={false}/>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);