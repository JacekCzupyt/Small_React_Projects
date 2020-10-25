import React from 'react';
import CarListItem from './CarListItemComponent';
import carsData from './data/cars.json';

class CarsListComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cars: carsData.map((car) => 
                <CarListItem carName={car.name} seats={car.seats} doors={car.doors} pricePerDay={car.pricePerDay} />)
        }
    }

    render(){

        return(
            <div>
                {this.state.cars}
            </div>
        )
    }
}

export default CarsListComponent