import React from 'react';
import CarListItem from './CarListItemComponent';
import carsData from './data/cars.json';

class CarsListComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cars: carsData.map((car) => 
                <CarListItem carName={car.name} seats={car.seats} doors={car.doors} pricePerDay={car.pricePerDay} />),
            searchTerm: ""
        }

        this.SearchTermChangeHandle = this.SearchTermChangeHandle.bind(this);
    }

    SearchTermChangeHandle(e){
        this.setState({searchTerm: e.target.value});
    }

    render(){

        return(
            <div>
                <input type="text" value={this.state.searchTerm} onChange={this.SearchTermChangeHandle}></input>
                {this.state.cars.filter(car => {return ('' + car.props.carName).toLocaleLowerCase().includes(this.state.searchTerm.toLocaleLowerCase())})}
            </div>//Please tell me there is a better way to cast a prop to string then that, because I couldn't find one for 30 min
        )
    }
}

export default CarsListComponent