import React, {useState} from 'react'
import {validate} from 'validate.js'

const constraints = {
    emailAddress: {
      presence: {
        allowEmpty: false,
        message: "^Email must be provided"
      },
      email: {
        message: "^Email address is invalid"
      }
    },
  };

function NameStep(props){

    const [FirstName, SetFirstName] = useState("");
    const [LastName, SetLastName] = useState("");
    const [EmailAddress, SetEmailAddress] = useState("");
    const [ErrorText, SetErrorText] = useState("");

    function InputValueChanged(e, setState){
        setState(e.target.value);
    }

    function NextButtonPressed(){
        //validate inputs
        if(FirstName===""){
            SetErrorText("First name must be provided");
            return;
        }
        if(LastName===""){
            SetErrorText("Last name must be provided");
            return;
        }
        const validationResult = validate({emailAddress: EmailAddress} , constraints);
        if(validationResult != undefined){
            console.log(validationResult);
            SetErrorText(validationResult.emailAddress[0]);
            return
        }

        //proceed to next form
        SetErrorText("");
        //props.MoveNextHook({First_Name: {FirstName}, Last_Name: {LastName}, Email_Address: {EmailAddress}});
        props.MoveNextHook({FirstName, LastName, EmailAddress}  , "Name");
    }

    return(
        <div>
            <input type="text" value={FirstName} placeholder="First Name" onChange={(e) => InputValueChanged(e, SetFirstName)}></input>
            <br/>
            <input type="text" value={LastName} placeholder="Last Name" onChange={(e) => InputValueChanged(e, SetLastName)}></input>
            <br/>
            <input type="text" value={EmailAddress} placeholder="Email" onChange={(e) => InputValueChanged(e, SetEmailAddress)}></input>
            <br/>
            <button onClick={() => NextButtonPressed()}>Next</button>
            <label style={{color: "red"}}>{ErrorText}</label>
        </div>
    )
}

export default NameStep;