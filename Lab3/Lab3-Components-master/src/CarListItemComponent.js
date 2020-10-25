import React from 'react';

class CarListItemComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pricePerDay: props.pricePerDay,
            isBeingEdited: false
        }

        this.OnEditPrice = this.OnEditPrice.bind(this);
        this.DefaultView = this.DefaultView.bind(this);
        this.EditedView = this.EditedView.bind(this);
        this.HandleChange = this.HandleChange.bind(this);
    }

    OnEditPrice(e, val){
        this.setState({isBeingEdited: val});
    }


    DefaultView(){
        return(
            <td width="20%">
                <tr>
                    {this.state.pricePerDay}
                </tr>
                
                <tr>
                    <td>
                        <button onClick={(e) => this.OnEditPrice(e, true)}>Edit</button>
                    </td>
                    <td>
                        <button onClick={() => this.props.removeHook(this.props.ind)}>Delete</button>
                    </td>
                </tr>
            </td>
        )
    }

    HandleChange(e){
        this.setState({pricePerDay: e.target.value });
    }

    EditedView(){
        return(
            <td width="20%">
                <tr>
                    <input type="number" value={this.state.pricePerDay} onChange={this.HandleChange}  />
                </tr>
                <tr>
                    <button onClick={(e) => this.OnEditPrice(e, false)}>Save</button>
                </tr>
            </td>
        )
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
                    {
                        this.state.isBeingEdited ?
                            this.EditedView()
                            :
                            this.DefaultView()
                    }

                </table>
            </div>
        )
    }
}

export default CarListItemComponent