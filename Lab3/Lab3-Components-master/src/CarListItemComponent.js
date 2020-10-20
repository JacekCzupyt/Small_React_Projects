import React from 'react';

class CarListItemComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <table style={{border:"1px solid black"}} width="100%">
                    <td>
                        {this.props.carName}
                    </td>
                    <td>
                        {this.props.seats}
                        <br/>
                        {this.props.doors}
                    </td>
                    <td>
                        {this.props.pricePerDay}
                    </td>
                </table>
            </div>
        )
    }
}

export default CarListItemComponent