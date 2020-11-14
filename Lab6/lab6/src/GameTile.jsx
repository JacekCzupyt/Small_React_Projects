import React from 'react';


const GameTile = (props) =>{
    return(
        <svg style={{width: "20px", height:"20px", border:"1px solid", margin:"1px", background:props.highlighted === true ? "green" : "gray"}}/>
    )
}

export default GameTile;