import react, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from 'react-router-dom'


function AddForm(props){
    const [formState, SetFormState] = useState({isActive: false, age:"", name:"", company:"", email:""});

    const handleChange = (e) => {
        let fs = formState;
        fs[e.target.name] = e.target.value;
        SetFormState(fs);
        
    }

    return(
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
            <button>Submit</button>
            <button>Cancel</button>
        </div>
    );
}

export default AddForm;

