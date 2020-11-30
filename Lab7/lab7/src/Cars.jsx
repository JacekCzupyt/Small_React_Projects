import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation,
    Redirect
  } from "react-router-dom"
import EditCar from './EditCar'
import EtidCar from './EditCar'


const carList = [
    {
        id: 1,
        name: "BMW"
    },
    {
        id: 2,
        name: "Tesla"
    }
]


const Cars = (props) => {
    const pathname = useLocation();
    const [cars, setCars] = useState(carList);

    function addToCars(car){
        car.id = Math.max(cars.map((c) => c.id)) + 1;
        setCars([...cars, car]);
    }



    return(
        <div>
            <list>
                {cars.map((car) => <li>{car.name} <button>edit</button></li>)}
            </list>
            <Link to="/cars/add">Add Car</Link>
            <Switch>
                <Route path="/cars/add">
                    <EditCar CallbackFunc={addToCars}/>
                </Route>
            </Switch>
        </div>
    )
}

export default Cars;