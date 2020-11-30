import react, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from 'react-router-dom'


function Component(porps){
    let history = useHistory();



    const [employees, setEmployees] = useState([]);
    const [isLoaded, setIsLoaded] = useState();

    useEffect(() => {
        fetch("http://localhost:3004/employees").then(res => res.json()).then(data => setEmployees(data)).then(() => setIsLoaded(true));
    }, []);

    return(
        <div>
            {isLoaded ? 
            <div>
                {employees.map((employee) => (<div><p>{employee.id} : {employee.name}</p></div>))} 
                <button onClick={() => history.push('/add')}>Add Employee</button> 
            </div>
            :
            "Loading..."}
        </div>
    );
}


export default Component;