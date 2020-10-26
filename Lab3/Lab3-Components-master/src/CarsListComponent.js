import React from 'react';
import CarListItem from './CarListItemComponent';
import carsData from './data/cars.json';

class CarsListComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchTerm: "",
            cars: carsData.map((car, index) => 
                <CarListItem carName={car.name} seats={car.seats} doors={car.doors} pricePerDay={car.pricePerDay} removeHook={this.RemoveCarFromList} editHook={this.EditCarPrice} ind={index} key={index}/>)
        }

        this.SearchTermChangeHandle = this.SearchTermChangeHandle.bind(this);



    }


    SearchTermChangeHandle(e){
        this.setState({searchTerm: e.target.value});
    }

    RemoveCarFromList = (carIndex) => {
        this.setState({cars: this.state.cars.filter((car) => car.props.ind !== carIndex)});
        
    }

    EditCarPrice = (price, carIndex) => {
        let carList = this.state.cars.map((car) => car.props.ind !== carIndex ? car : 
        <CarListItem carName={car.props.carName} seats={car.props.seats} doors={car.props.doors} pricePerDay={price} removeHook={this.RemoveCarFromList} editHook={this.EditCarPrice} ind={car.props.ind} key={car.props.ind}/>);
        this.setState({cars: carList});
    }

    render(){

        return(
            <div style={{background:"#E5E7E9"}}>
                <input style={{marginTop:"10px", marginLeft:"10px"}} type="text" placeholder="Search..." value={this.state.searchTerm} onChange={this.SearchTermChangeHandle}></input>
                {this.state.cars.filter(car => {return ('' + car.props.carName).toLocaleLowerCase().includes(this.state.searchTerm.toLocaleLowerCase())})}
            </div>//Please tell me there is a better way to cast a prop to string then that, because I couldn't find one for 30 min
        )
    }
}

export default CarsListComponent