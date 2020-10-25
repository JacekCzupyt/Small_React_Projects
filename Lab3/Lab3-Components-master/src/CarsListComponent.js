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
        return(
/*            <div>
                <CarListItem carName="example" seats="seatExample" doors="doorExample" pricePerDay={100}/>

            </div>*/
            <div>
                <CarListItem carName={carsData[0].name} seats={carsData[0].seats} doors={carsData[0].doors} pricePerDay={carsData[0].pricePerDay} />
            </div>
        )
    }
}

export default CarsListComponent