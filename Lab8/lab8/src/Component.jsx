import react, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from 'react-router-dom'
import AddForm from './AddForm'


function Component(porps){
    let history = useHistory();



    const [employees, setEmployees] = useState([]);
    const [isLoaded, setIsLoaded] = useState();

    const LoadData = () => {
        setIsLoaded(false);
        fetch("http://localhost:3004/employees").then(res => res.json())
            .then(data => setEmployees(data))
            .then(() => setIsLoaded(true))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        LoadData();
    }, []);

    return(
        <div>
            {isLoaded ? 
            <div>
                {employees.map((employee) => (<div><p>{employee.id} : {employee.name}</p></div>))}
                <Switch>
                    <Route exact path="/">
                        <button onClick={() => history.push('/add')}>Add Employee</button> 
                    </Route>
                    <Route path="/add">
                        <AddForm reloadFunc={LoadData}/>
                    </Route>
                </Switch>
            </div>
            :
            "Loading..."}
        </div>
    );
}


export default Component;