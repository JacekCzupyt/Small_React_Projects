import React from 'react';

class CarListItemComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <table style={{border:"1px solid black"}} width="100%">
                    <td width="30%">
                        {this.props.carName}
                    </td>
                    <td width="50%">
                        {this.props.seats}
                        <br/>
                        {this.props.doors}
                    </td>
                    <td width="20%">
                        {this.props.pricePerDay}
                    </td>
                </table>
            </div>
        )
    }
}

export default CarListItemComponent