import React from 'react'

function NameStep(props){
    return(
        <div>
            NameStep
            <button onClick={() => props.MoveNextHook()}>Next</button>
        </div>
    )
}

export default NameStep;