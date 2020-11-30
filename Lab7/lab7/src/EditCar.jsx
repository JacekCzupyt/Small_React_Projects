import React, { useState } from 'react'


const EditCar = (props) => {
    
    const [name, setName] = useState("");
    
    return(
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={(name) => props.CallbackFunc({name: name})}>Save</button>
        </div>
    )
}

export default EditCar;