import React, {useState} from 'react'

function NameStep(props){

    const [FirstName, SetFirstName] = useState("");
    const [LastName, SetLastName] = useState("");
    const [Email, SetEmail] = useState("");
    const [ErrorText, SetErrorText] = useState("");

    function InputValueChanged(e, setState){
        setState(e.target.value);
    }

    function NextButtonPressed(){
        //validate inputs
        if(FirstName==""){
            SetErrorText("First name must be provided");
            return;
        }
        if(LastName==""){
            SetErrorText("Last name must be provided");
            return;
        }
        if(Email==""){
            SetErrorText("Email must be provided");
            return;
        }
        
        props.MoveNextHook();
    }

    return(
        <div>
            <input type="text" value={FirstName} placeholder="First Name" onChange={(e) => InputValueChanged(e, SetFirstName)}></input>
            <br/>
            <input type="text" value={LastName} placeholder="Last Name" onChange={(e) => InputValueChanged(e, SetLastName)}></input>
            <br/>
            <input type="text" value={Email} placeholder="Email" onChange={(e) => InputValueChanged(e, SetEmail)}></input>
            <br/>
            <button onClick={() => NextButtonPressed()}>Next</button>
            <label style={{color: "red"}}>{ErrorText}</label>
        </div>
    )
}

export default NameStep;