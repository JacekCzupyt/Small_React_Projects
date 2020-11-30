import react, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from 'react-router-dom'


function AddForm(props){
    let history = useHistory();

    const [formState, SetFormState] = useState({isActive: false, age:"", name:"", company:"", email:""});
    const [isSaving, setIsSaving] = useState(false);

    const handleChange = (e) => {
        let fs = formState;
        fs[e.target.name] = e.target.value;
        SetFormState(fs);
    }

    const SubmitButton = () => {
        setIsSaving(true);
        fetch("http://localhost:3004/employees", {
            method: 'POST',
            body: JSON.stringify(formState),
            headers: {"Content-Type" : "application/json"}
        }).then(() => {props.reloadFunc(); history.goBack();})
        .catch(error => console.error(error));
    }

    return(
        <div>
            {isSaving ? 
            "Saving..." :
            <div>
                <input type="checkbox" name="isActive" onChange={handleChange}/> Is Active
                <br/>
                <input type="text" name="age" placeholder="Age" onChange={handleChange}/> 
                <br/>
                <input type="text" name="name" placeholder="Name" onChange={handleChange}/>
                <br/>
                <input type="text" name="company" placeholder="Company" onChange={handleChange}/>
                <br/>
                <input type="text" name="email" placeholder="Email" onChange={handleChange}/>
                <br/>
                <button onClick={SubmitButton}>Submit</button>
                <button onClick={() => history.goBack()}>Cancel</button>
            </div>
            }
        </div>
    );
}

export default AddForm;

