import React from 'react';
import CarListItem from './CarListItemComponent';

class CarsListComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            PlaceholderState: "Placeholder"
        }
    }

    render(){
        return(
            <div>
                <CarListItem carName="example" seats="seatExample" doors="doorExample" pricePerDay={100}/>
            </div>
        )
    }
}

export default CarsListComponent