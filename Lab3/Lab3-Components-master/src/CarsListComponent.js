import React from 'react';
import CarListItem from './CarListItemComponent';
import carsData from './data/cars.json';

class CarsListComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            PlaceholderState: "Placeholder"
        }
    }

    render(){
        const cars = carsData.map((car) => 
        <CarListItem carName={car.name} seats={car.seats} doors={car.doors} pricePerDay={car.pricePerDay} />)
        return(
            <div>
                {cars}
            </div>
        )
    }
}

export default CarsListComponent