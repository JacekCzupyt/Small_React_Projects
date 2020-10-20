import React from 'react';

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
                {this.state.PlaceholderState}
            </div>
        )
    }
}

export default CarsListComponent