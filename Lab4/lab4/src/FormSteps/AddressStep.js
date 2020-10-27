import React from 'react'

function AddressStep(props){
    return(
        <div>
            AddressStep
            <button onClick={() => props.MoveNextHook()}>Next</button>
        </div>
    )
}

export default AddressStep;